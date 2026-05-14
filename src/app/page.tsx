"use client";
import { Package, AlertTriangle, TrendingUp, Warehouse } from "lucide-react"; // Standard icons for IMS

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-950">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          SwiftStock Pro: Inventory Overview
        </h1>
        <p className="text-zinc-500">Real-time visibility across your global supply chain.</p>
      </header>

      {/* Stats Grid: High-level visibility for decision variables */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total SKUs" value="1,284" icon={<Package size={20} />} detail="+12 from last week" />
        <StatCard title="Low Stock Alerts" value="14" icon={<AlertTriangle size={20} className="text-amber-500" />} detail="Requires immediate action" />
        <StatCard title="Inventory Turnover" value="6.2" icon={<TrendingUp size={20} />} detail="Goal: > 5.0" />
        <StatCard title="Active Warehouses" value="4" icon={<Warehouse size={20} />} detail="Across 2 regions" />
      </div>

      {/* Main Content Area: Where our Table will go later */}
      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-zinc-200 rounded-lg dark:border-zinc-800">
          <p className="text-zinc-400">Inventory Table & Server-Side Data Fetching (Coming Next...)</p>
        </div>
      </div>
    </div>
  );
}

// Reusable component for the dashboard stats
function StatCard({ title, value, icon, detail }: { title: string, value: string, icon: React.ReactNode, detail: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-zinc-500">{title}</h3>
        <div className="text-zinc-400">{icon}</div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-zinc-400 mt-1">{detail}</p>
    </div>
  );
}