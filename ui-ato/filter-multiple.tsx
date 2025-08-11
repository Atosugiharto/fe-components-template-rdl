import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { ChevronDown, ChevronRight, X } from "lucide-react";

const OPTIONS = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7"];

export default function FilterMultiple() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleRemove = (option: string) => {
    setSelected((prev) => prev.filter((o) => o !== option));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center justify-between bg-muted text-muted-foreground px-3 py-2 rounded-md text-sm border border-input shadow-sm w-[300px] overflow-hidden"
        >
          <div className="flex gap-1 flex-wrap max-h-[60px] overflow-y-auto pr-2 text-left">
            {selected.length === 0 && <span className="text-muted-foreground">Choose One</span>}
            {selected.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 bg-background px-2 py-0.5 rounded-full text-sm border"
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
          {open ? (
            <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
          ) : (
            <ChevronRight className="ml-2 h-4 w-4 shrink-0" />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 bg-white">
        <Command>
          <CommandGroup>
            {OPTIONS.filter((option) => !selected.includes(option)).map(
              (option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={() => handleToggle(option)}
                >
                  {option}
                </CommandItem>
              )
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
