export interface Product {
  productId: string;
  name: string;
  sku: string;
  category: "A" | "B" | "C";
  quantity: number;
  reorderPoint: number;
  unitPrice: number;
  warehouse: string;
}