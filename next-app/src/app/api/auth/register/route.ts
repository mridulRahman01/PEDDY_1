import { NextResponse } from 'next/server';
import { createUser, findUserByEmail } from '@/lib/db';
import { hashPassword, generateToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 });
        }

        if (password.length < 8) {
            return NextResponse.json({ error: 'Password must be at least 8 characters long' }, { status: 400 });
        }

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return NextResponse.json({ error: 'Email is already registered' }, { status: 409 });
        }

        const passwordHash = await hashPassword(password);
        const user = await createUser({ name, email, passwordHash });

        // Auto-login after registration
        const token = await generateToken({ id: user.id, email: user.email, name: user.name });

        const cookieStore = await cookies();
        cookieStore.set({
            name: 'auth_token',
            value: token,
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            sameSite: 'strict',
        });

        return NextResponse.json(
            { message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email } },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
