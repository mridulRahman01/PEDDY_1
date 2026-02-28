import fs from 'fs/promises';
import path from 'path';

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: string;
}

// Store users in a local file to mock a persistent JSON database.
const DB_PATH = path.join(process.cwd(), 'peddy-users.json');

export async function getUsers(): Promise<User[]> {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(DB_PATH, JSON.stringify([]), 'utf-8');
            return [];
        }
        throw error;
    }
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
    const users = await getUsers();
    return users.find(u => u.email === email);
}

export async function createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const users = await getUsers();

    if (users.some(u => u.email === user.email)) {
        throw new Error('User with this email already exists.');
    }

    const newUser: User = {
        ...user,
        id: Math.random().toString(36).substring(2, 10),
        createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    await fs.writeFile(DB_PATH, JSON.stringify(users, null, 2), 'utf-8');

    return newUser;
}
