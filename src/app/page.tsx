import { Package, AlertTriangle, DollarSign, Warehouse } from "lucide-react";
import TableCard from "./components/tableCard";
import { getInventory, getAnalytics } from "@/lib/api";

export default async function Home() {
  // Fetch both datasets concurrently from the Flask backend
  const [fetchedInventory, stats] = await Promise.all([
    getInventory(),
    getAnalytics(),
  ]);

  const inventory = fetchedInventory || [];

  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-950">
      {/* Header */}
      <header className="mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            SwiftStock Pro: Inventory Overview
          </h1>
          <p className="text-zinc-500">
            Real-time visibility across your global supply chain.
          </p>
        </div>
      </header>

      {/* Backend Offline Warning Banner */}
      {!stats && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400">
          <p className="text-sm font-medium">
            ⚠️ <strong>Backend Connection Error:</strong> Unable to connect to the Flask analytics engine on port 5000. Real-time KPI calculations are temporarily unavailable.
          </p>
        </div>
      )}

      {/* Stats Grid: Populated directly from backend /api/analytics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total SKUs"
          value={stats ? stats.totalSkus.toString() : "—"}
          icon={<Package size={20} />}
          detail="Live SKUs in database"
        />
        <StatCard
          title="Total Valuation"
          value={
            stats
              ? `₹${stats.totalInventoryValue.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : "—"
          }
          icon={<DollarSign size={20} />}
          detail="Cumulative stock asset value"
        />
        <StatCard
          title="Low Stock Alerts"
          value={stats ? stats.lowStockAlerts.toString() : "—"}
          icon={<AlertTriangle size={20} className="text-amber-500" />}
          detail="Items at or below reorder threshold"
        />
        <StatCard
          title="Active Warehouses"
          value={stats ? stats.activeWarehouses.toString() : "—"}
          icon={<Warehouse size={20} />}
          detail="Operational fulfillment hubs"
        />
      </div>

      {/* Main Content Area: Filterable Data Table */}
      <div className="mt-8">
        <TableCard products={inventory} />
      </div>
    </div>
  );
}

// Reusable component for the dashboard stats
function StatCard({
  title,
  value,
  icon,
  detail,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-zinc-500">{title}</h3>
        <div className="text-zinc-400">{icon}</div>
      </div>
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        {value}
      </div>
      <p className="mt-1 text-xs text-zinc-400">{detail}</p>
    </div>
  );
}