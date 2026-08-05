import { NextResponse } from "next/server";
import { mockInventory } from "@/data/inventory";

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return NextResponse.json(mockInventory);
}

// this is the actual backend server which tasks to the database
// and sends raw JSON to which ever service reuests for the data