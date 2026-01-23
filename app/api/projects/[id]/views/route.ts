import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

// Fallback in-memory storage for local development
const localViewCounts = new Map<string, number>();

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const key = `project:${id}:views`;

        // Try Vercel KV first
        try {
            const views = await kv.incr(key);
            return NextResponse.json({ views });
        } catch (kvError) {
            // Fallback to in-memory storage for local development
            const currentViews = localViewCounts.get(key) || 0;
            const newViews = currentViews + 1;
            localViewCounts.set(key, newViews);
            return NextResponse.json({ views: newViews, local: true });
        }
    } catch (error) {
        console.error('Error incrementing project views:', error);
        return NextResponse.json({ error: 'Failed to increment views' }, { status: 500 });
    }
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const key = `project:${id}:views`;

        // Try Vercel KV first
        try {
            const views = await kv.get<number>(key) || 0;
            return NextResponse.json({ views });
        } catch (kvError) {
            // Fallback to in-memory storage for local development
            const views = localViewCounts.get(key) || 0;
            return NextResponse.json({ views, local: true });
        }
    } catch (error) {
        console.error('Error fetching project views:', error);
        return NextResponse.json({ error: 'Failed to fetch views' }, { status: 500 });
    }
}
