"use client";
import React, { useState } from "react";
import { AlertCircle, Filter } from "lucide-react";
import { getInventory } from "@/api/api";

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
export default async function TableCard({products} : TableCardProps) {
    const fetchedInventory = await getInventory();
    const inventory = fetchedInventory || [];
    const [selectedWarehouse, setSelectedWarehouse] = useState("Warehouse(All)");
    const [selectedCategory, setSelectedCategory] = useState("Category(All)");
    const [selectedQuantity, setSelectedQuantity] = useState("Stock Level(All)");

    const filteredProducts = inventory.filter((product) => {
        const matchesWarehouse = selectedWarehouse == "Warehouse(All)" || product.warehouse == selectedWarehouse;
        const matchesCategory = selectedCategory == "Category(All)" || product.category == selectedCategory;
        const isLowStock = product.quantity <= product.reorderPoint;
        const matchesQuantity = selectedQuantity == "Stock Level(All)" || (selectedQuantity == "Low Stock" && isLowStock) || (selectedQuantity == "Normal" && !isLowStock);
        return matchesQuantity && matchesWarehouse && matchesCategory
    });
    const uniqueWarehouses = ["Warehouse(All)", ...new Set(inventory.map((item) => item.warehouse))];
    const uniqueCategory = ["Category(All)", ...new Set(inventory.map((item) => item.category))];
    const handleReset = () => {
        setSelectedWarehouse("Warehouse(All)");
        setSelectedCategory("Category(All)");
        setSelectedQuantity("Stock Level(All)");
        };
    return(
        <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-800/20">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <Filter size={16}/>
                    <span>Inventory Filter</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    {/* Warehouse Dropdown */}
                    <select className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    value={selectedWarehouse}
                    onChange={(change)=> setSelectedWarehouse(change.target.value)} name="" id="">
                        {uniqueWarehouses.map((warehouse) => (
                        <option key={warehouse} value={warehouse}>
                            {warehouse}
                        </option>
                        ))}
                    </select>
                    {/* Category Dropdon */}
                    <select 
                    className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    value={selectedCategory}
                    onChange={(change) => setSelectedCategory(change.target.value)}
                    >
                        {uniqueCategory.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <select className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    value={selectedQuantity}
                    onChange={(change) => setSelectedQuantity(change.target.value)}>
                        <option value="Stock Level(All)">Stock Level(All)</option>
                        <option value="Normal">Normal Stock</option>
                        <option value="Low Stock">Low Stock</option>
                    </select>
                    <button className="hover:cursor-pointer" onClick={handleReset}>Reset</button>
                </div>
            </div>
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
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {filteredProducts.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="py-8 text-center text-zinc-500">
                                    No Products found for the filter applied.
                                </td>
                            </tr>
                        ) : (
                        filteredProducts.map((product) => {
                            const isLowStock = product.quantity <= product.reorderPoint;
                            return (
                                <tr key = {product.productId}
                                    className={`group transition-colors duration-150 hover:bg-zinc-50/70 dark:hover:bg-zinc-800/30 ${
                                            isLowStock 
                                            ? "bg-amber-50/30 dark:bg-amber-950/10 hover:bg-amber-50/50 dark:hover:bg-amber-950/20" 
                                            : ""
                                        }`}>
                                    {/* Column 1: Product Name */}
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-zinc-900 dark:text-zinc-100">
                                    {product.name}
                                    </td>

                                    {/* Column 2: SKU */}
                                    <td className="whitespace-nowrap px-6 py-4 font-mono text-xs tracking-tight text-zinc-600 dark:text-zinc-400">
                                    {product.sku}
                                    </td>

                                    {/* Column 3: ABC Category Badge */}
                                    <td className="whitespace-nowrap px-6 py-4">
                                    <span
                                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ring-1 ring-inset ${
                                        product.category === "A"
                                            ? "bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-950/30 dark:text-purple-400"
                                            : product.category === "B"
                                            ? "bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-950/30 dark:text-blue-400"
                                            : "bg-zinc-50 text-zinc-600 ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-400"
                                        }`}
                                    >
                                        Class {product.category}
                                    </span>
                                    </td>

                                    {/* Column 4: Warehouse */}
                                    <td className="whitespace-nowrap px-6 py-4 text-zinc-600 dark:text-zinc-400">
                                    {product.warehouse}
                                    </td>
                                    {/* Column 5: Unit Price (Right-Aligned for Financial Scanning) */}
                                    <td className="whitespace-nowrap px-6 py-4 text-right font-medium text-zinc-900 dark:text-zinc-100">
                                    ₹{product.unitPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>

                                    {/* Column 6: Quantity (With conditional formatting for stockouts) */}
                                    <td className="whitespace-nowrap px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        {isLowStock && (
                                        <span className="inline-flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
                                            <AlertCircle size={14} />
                                            <span className="text-xs uppercase tracking-wider">Low</span>
                                        </span>
                                        )}
                                        <span
                                        className={`font-semibold ${
                                            isLowStock
                                            ? "text-amber-700 dark:text-amber-400"
                                            : "text-zinc-900 dark:text-zinc-100"
                                        }`}
                                        >
                                        {product.quantity.toLocaleString()}
                                        </span>
                                    </div>
                                    </td>
                                </tr>
                            );
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}