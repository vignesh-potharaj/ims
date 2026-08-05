import { Product } from "@/data/inventory";
import { mockInventory } from "@/data/inventory";

export async function getInventory(): Promise<Product[]>{
    try {
        await new Promise((resolve) => setTimeout(resolve, 800))
        return mockInventory
    }
    catch (error){
        console.error("Database query failed:", error);
        return [];
    }
}

// This is a Server Data Fetcher.
// It securely queries the database directly (bypassing HTTP fetch) 
// to provide data to Next.js Server Components.