import { Product } from "@/types/inventory";

export async function getInventory(): Promise<Product[]>{
    try {
        const res = await fetch("http://localhost:5000/api/inventory", {
        cache: "no-store", // Guarantees fresh database reads on every request
        });

        if (!res.ok) {
        throw new Error(`Backend server error: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Failed to fetch inventory from Flask backend:", error);
        return []; // Defensive fallback
    }
    }
// This is a Server Data Fetcher.
// It securely queries the database directly (bypassing HTTP fetch) 
// to provide data to Next.js Server Components.