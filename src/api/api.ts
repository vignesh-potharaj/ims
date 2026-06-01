import { Product } from "@/data/inventory";
import { cache } from "react";

export async function getInventory(): Promise<Product[]>{
    const res = await fetch('http://localhost:3000/api/route', { cache: 'no-store'});
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}