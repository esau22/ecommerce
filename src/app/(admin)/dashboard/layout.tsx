"use client";
import { useState, ReactNode } from "react";
import Sidebar from "@/components/shared/sidebar";
import Header from "@/components/shared/header/header";

interface DashboardLayoutProps {
  children: ReactNode;
  salesId: string; // Nueva propiedad para pasar el salesId al layout
}
export default function DashboardLayout({
  children,
  salesId,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          salesId={salesId}
        />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
