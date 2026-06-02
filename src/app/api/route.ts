import { NextResponse } from "next/server";
import { mockInventory } from "@/data/inventory";

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return NextResponse.json(mockInventory);
}
// This is a Server Data Fetcher.
// It securely queries the database directly (bypassing HTTP fetch) 
// to provide data to Next.js Server Components.