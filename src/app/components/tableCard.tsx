import React from "react";
interface TableCardProps {
    products: {
        productId: string;
        name: string;
        sku: string;
        category: "A" | "B" | "C";
        quantity: number;
        reorderPoint: number;
        unitPrice: number;
        warehouse: string;
    } [];
}
export default function TableCard({products} : TableCardProps) {
  return(
    <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-zinc-500 dark:text-zinc-400">
                <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300">
                    <tr>
                    <th className="px-6 py-4">Product Details</th>
                    <th className="px-6 py-4">SKU Code</th>
                    <th className="px-6 py-4">Tier</th>
                    <th className="px-6 py-4">Warehouse Location</th>
                    <th className="px-6 py-4 text-right">Unit Price</th>
                    <th className="px-6 py-4 text-right">Stock Level</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}