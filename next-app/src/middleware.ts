import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;

    // Protect /dashboard route
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            const secret = new TextEncoder().encode(
                process.env.JWT_SECRET || 'super-secret-peddy-jwt-key-for-development'
            );
            // Verify token
            await jose.jwtVerify(token, secret);
            return NextResponse.next();
        } catch (err) {
            // Invalid token, delete cookie and redirect
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('auth_token');
            return response;
        }
    }

    // Prevent logged in users from visiting signup or login pages
    if (['/login', '/signup'].includes(request.nextUrl.pathname) && token) {
        try {
            const secret = new TextEncoder().encode(
                process.env.JWT_SECRET || 'super-secret-peddy-jwt-key-for-development'
            );
            await jose.jwtVerify(token, secret);
            return NextResponse.redirect(new URL('/dashboard', request.url));
        } catch (err) {
            return NextResponse.next();
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*', '/login', '/signup'],
};
