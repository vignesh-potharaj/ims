"use client";

import { useState } from "react";
import { Product } from "@/types/inventory";
import { deleteProduct } from "@/lib/api";
import { useRouter } from "next/navigation";
import { AlertTriangle, X } from "lucide-react";

interface DeleteConfirmModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteConfirmModal({
  product,
  isOpen,
  onClose,
}: DeleteConfirmModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen || !product) return null;

  const handleDelete = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const result = await deleteProduct(product.productId);

      if (result.success) {
        onClose();
        router.refresh(); // Triggers server re-fetch & updates table + KPI Bento cards
      } else {
        setErrorMessage(result.error || "Failed to delete product.");
      }
    } catch (error) {
      console.error("Unexpected error during deletion:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
          <div className="flex items-center gap-2 text-red-500">
            <AlertTriangle size={20} />
            <h2 className="text-lg font-bold text-zinc-100">Confirm Deletion</h2>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
            {errorMessage}
          </div>
        )}

        <p className="text-sm text-zinc-300 leading-relaxed">
          Are you sure you want to permanently delete{" "}
          <span className="font-semibold text-white">"{product.name}"</span> (
          <span className="font-mono text-xs text-zinc-400">{product.sku}</span>
          )? This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-zinc-800">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500 disabled:opacity-50 transition"
          >
            {loading ? "Deleting..." : "Delete SKU"}
          </button>
        </div>
      </div>
    </div>
  );
}