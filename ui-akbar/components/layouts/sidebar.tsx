import { cn } from "@/utils/cn";
import { NavLink } from "react-router";
import { ChevronRight, Edit } from "lucide-react";

interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  return (
    <div className={cn("fixed z-10 top-[106px] -left-60 w-60 h-full pb-4 transition-all overflow-hidden", isSidebarOpen && "left-4")}>
      <div className={cn("flex flex-1 flex-col gap-y-3 py-3 h-[calc(100%-106px)] border bg-white shadow-sm rounded-xl", isSidebarOpen && "overflow-y-auto")}>
        <div className="font-semibold px-3 text-sm">Menu</div>
        <div className="flex flex-col px-3 gap-y-1">
          <NavLink to="/" className="flex items-center gap-x-3 h-10 p-2">
            <Edit className="text-black w-5 h-5" />
            <span className="text-black text-xs">Main Menu</span>
          </NavLink>
          <NavLink to="/" className="flex items-center gap-x-3 h-10 p-2">
            <Edit className="text-black w-5 h-5" />
            <span className="text-black text-xs">Main Menu</span>
          </NavLink>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between h-10 p-2 group peer open border border-[rgba(22,_106,_150,_1)] rounded-md bg-[rgba(24,_116,_165,_1)]">
              <div className="flex items-center gap-x-3">
                <Edit className="text-white w-5 h-5" />
                <span className="text-white text-xs">Main Menu</span>
              </div>
              <ChevronRight className="text-white transition-transform group-[.open]:rotate-90" size={20} />
            </div>
            <div className="hidden flex-col peer-[.open]:flex">
              <NavLink to="/" className="flex items-center gap-x-3 h-10 ml-5 pl-5 rounded-r-md text-xs text-white border-l-2 border-[rgba(22,_106,_150,_1)] bg-[rgba(24,_116,_165,_1)]">Sub Menu 1</NavLink>
              <NavLink to="/" className="flex items-center gap-x-3 h-10 ml-5 pl-5 rounded-r-md text-xs">Sub Menu 2</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}