import { AdminSidebar } from "@/components/layouts/adminSideBar";
import { Appbar } from "@/components/layouts/appBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marmitech - Painel do Funcionário",
  description: "Interface de gerenciamento operacional para funcionários da marmitaria.",
};

export default function EmployeeDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Appbar */}
        <header className="border-b border-muted bg-card">
          <Appbar />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
