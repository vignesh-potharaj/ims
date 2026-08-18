"use client";

import React, { useState } from "react";
import { AlertCircle, Filter, Pencil, Plus } from "lucide-react";
import { Product } from "@/types/inventory";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";

interface TableCardProps {
  products: Product[];
}

export default function TableCard({ products }: TableCardProps) {
  const [selectedWarehouse, setSelectedWarehouse] = useState("Warehouse(All)");
  const [selectedCategory, setSelectedCategory] = useState("Category(All)");
  const [selectedQuantity, setSelectedQuantity] = useState("Stock Level(All)");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Client-side filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesWarehouse =
      selectedWarehouse === "Warehouse(All)" || product.warehouse === selectedWarehouse;
    const matchesCategory =
      selectedCategory === "Category(All)" || product.category === selectedCategory;
    const isLowStock = product.quantity <= product.reorderPoint;
    const matchesQuantity =
      selectedQuantity === "Stock Level(All)" ||
      (selectedQuantity === "Low Stock" && isLowStock) ||
      (selectedQuantity === "Normal" && !isLowStock);

    return matchesQuantity && matchesWarehouse && matchesCategory;
  });

  const uniqueWarehouses = [
    "Warehouse(All)",
    ...Array.from(new Set(products.map((item) => item.warehouse))),
  ];
  const uniqueCategory = [
    "Category(All)",
    ...Array.from(new Set(products.map((item) => item.category))),
  ];

  const handleReset = () => {
    setSelectedWarehouse("Warehouse(All)");
    setSelectedCategory("Category(All)");
    setSelectedQuantity("Stock Level(All)");
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {/* Top Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-800/20">
        {/* Left: Add SKU Action Button */}
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 text-sm font-medium text-white shadow transition"
        >
          <Plus size={16} />
          <span>Add Product</span>
        </button>

        {/* Right: Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
            <Filter size={14} />
            <span>Filters:</span>
          </div>

          {/* Warehouse Dropdown */}
          <select
            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            value={selectedWarehouse}
            onChange={(e) => setSelectedWarehouse(e.target.value)}
          >
            {uniqueWarehouses.map((warehouse) => (
              <option key={warehouse} value={warehouse}>
                {warehouse}
              </option>
            ))}
          </select>

          {/* Category Dropdown */}
          <select
            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {uniqueCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Stock Level Dropdown */}
          <select
            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(e.target.value)}
          >
            <option value="Stock Level(All)">Stock Level(All)</option>
            <option value="Normal">Normal Stock</option>
            <option value="Low Stock">Low Stock</option>
          </select>

          {/* Reset Button */}
          <button
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:cursor-pointer transition"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-sm text-zinc-300">
          <thead className="border-b border-zinc-800 bg-zinc-900/50 text-xs font-semibold uppercase text-zinc-400">
            <tr>
              <th className="px-4 py-3">Product Name</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Tier</th>
              <th className="px-4 py-3">Warehouse</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock Level</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-zinc-500">
                  No products found for the filter applied.
                </td>
              </tr>
            ) : (
              filteredProducts.map((p) => {
                const isLowStock = p.quantity <= p.reorderPoint;
                return (
                  <tr
                    key={p.productId}
                    className={`transition hover:bg-zinc-900/40 ${
                      isLowStock ? "bg-amber-950/10 hover:bg-amber-950/20" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-zinc-100">{p.name}</td>
                    <td className="px-4 py-3 font-mono text-xs text-zinc-400">{p.sku}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300">
                        Class {p.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">{p.warehouse}</td>
                    <td className="px-4 py-3">
                      ₹{p.unitPrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {isLowStock && (
                          <span className="inline-flex items-center gap-1 font-medium text-amber-500">
                            <AlertCircle size={14} />
                            <span className="text-xs font-bold uppercase">LOW</span>
                          </span>
                        )}
                        <span
                          className={`font-semibold ${
                            isLowStock ? "text-amber-400" : "text-zinc-100"
                          }`}
                        >
                          {p.quantity}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setEditingProduct(p)}
                        className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition"
                        title="Edit Product"
                      >
                        <Pencil size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <AddProductModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
      <EditProductModal
        product={editingProduct}
        isOpen={!!editingProduct}
        onClose={() => setEditingProduct(null)}
      />
    </div>
  );
}