import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Check, ChevronDown, ChevronRight, Filter, X } from "lucide-react";

const OPTIONS = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

export default function FilterState() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleRemove = (option: string) => {
    setSelected((prev) => prev.filter((o) => o !== option));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-md text-sm border border-input shadow-sm">
          <Filter className="h-4 w-4" />
          {selected.length === 0 && <span>Filter by</span>}
          {selected.length > 0 && (
            <div className="flex gap-1">
              {selected.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-full"
                >
                  {item}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(item);
                    }}
                  />
                </span>
              ))}
            </div>
          )}
          {open ? <ChevronDown className="ml-2 h-4 w-4" /> : <ChevronRight className="ml-2 h-4 w-4" />}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandGroup>
            {OPTIONS.map((option) => (
              <CommandItem
                key={option}
                value={option}
                onSelect={() => handleToggle(option)}
                className="flex justify-between"
              >
                {option}
                {selected.includes(option) && <Check className="h-4 w-4 text-green-600" />}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
