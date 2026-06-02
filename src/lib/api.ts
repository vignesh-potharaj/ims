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

// this is a helper function that wraps the fetch() command making it easy for the react 
// components to request data from route.ts 