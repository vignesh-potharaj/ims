import { Product } from "@/types/inventory";
import { error } from "console";
const BASE_URL = "http://localhost:5000/api";

// Get Inventory
export async function getInventory(): Promise<Product[]>{
    try {
        const res = await fetch(`${BASE_URL}/inventory`, {
        cache: "no-store", // Guarantees fresh database reads on every request
        });

        if (!res.ok) {
        throw new Error(`Backend server error: ${res.status}`);
        }

        return await res.json();
    } 
    catch (error) {
        console.error("Failed to fetch inventory from Flask backend:", error);
        return []; // Defensive fallback
    }
    }

// GET Analytics
export interface analyticsData {
    totalSkus: number,
    lowStockAlerts: number,
    totalInventoryValue: number,
    activeWarehouses: number
}
export async function getAnalytics(): Promise<analyticsData | null> {
    try{
        const res = await fetch(`${BASE_URL}/analytics`, {
            cache: 'no-store',
        });
        if(!res.ok) throw new Error(`Analytics fetch failed: ${res.status}`);
        return await res.json();
    }    catch (error) {
        console.error(`API Error (GET/Analytics): ${error}`);
        return null;
    }
}
// Add Product
export async function createProduct(productData: Partial<Product>): Promise<{ success: boolean; error?: string
}> {
    try {
        const res = await fetch(`${BASE_URL}/inventory`, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(productData),
        });
        const responseData = await res.json();
        if (!res.ok) {
            return {
                success: false,
                error: responseData.error || "Failed to create product.",
            };
        }
        return {
            success: true
        };
    } catch (error: any) {
            console.error("API Error (POST /inventory):", error)
            return {
                success: false,
                error: "Unable to connect to backend server."
            }
    }
}
// export async function updateProduct(
//     productId:string,
//     updatedFields: Partial<Product>
// ): Promise<boolean> {
//     try {
//         const res = await fetch(`${BASE_URL}/inventory/${productId}`, {
//             method:"PUT",
//             headers:{"Content-type": "application/json"},
//             body: JSON.stringify(updatedFields)
//         });
//         return res.ok
//     }
//     catch (error) {
//         console.error("API Error PUT Inventory")
//     }
// }