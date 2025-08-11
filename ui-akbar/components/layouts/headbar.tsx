import { Menu } from 'lucide-react';

interface HeadbarProps {
  toggleSidebar: () => void;
}

export default function Headbar({ toggleSidebar }: HeadbarProps) {
  return (
    <header className="fixed z-10 top-0 left-0 flex w-full h-[90px] transition-all">
      <span className="flex flex-1 items-center justify-between gap-4 px-4 bg-neutral-10 shadow-md">
        <Menu className="cursor-pointer stroke-[2.5] w-[max] text-white" onClick={toggleSidebar} />
        <span className="flex items-center gap-3">
          <button className="text-white">
            adsa
          </button>
        </span>
      </span>
    </header>
  );
}