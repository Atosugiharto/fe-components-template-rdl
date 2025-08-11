import { cn } from "@/utils/cn";
import { Outlet } from "react-router"; 
import { useState } from "react";

import Headbar from "./headbar";
import Sidebar from "./sidebar";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  }
  
  return (
    <>
      <Headbar toggleSidebar={toggleSidebar} />
      <section className={cn(
          "relative flex p-4 m-0 pt-[106px] overflow-hidden transition-all", 
          isSidebarOpen && "pl-64"
        )}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <section className={cn("min-h-screen", isSidebarOpen ? "pl-6" : "pl-0 w-full")}>
          <Outlet />
        </section>
      </section>
    </>
  );
}