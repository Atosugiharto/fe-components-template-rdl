import * as React from "react";
import { Accessibility, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils/cn";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const frameworks = [{ label: "Input Form", value: "input" }];

const ComboBox = ({
  disabled = false,
  error = false,
  selected = false,
}: {
  disabled?: boolean;
  error?: boolean;
  selected?: boolean;
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selected ? "input" : "");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          disabled={disabled}
          className={cn(
            "w-full justify-between",
            disabled && "bg-muted text-muted-foreground",
            error && "border border-red-500 text-red-600",
            selected && "bg-muted"
          )}
        >
          <div className="flex items-center gap-2">
            <Accessibility className="size-4 shrink-0" />
            {value ? (
              frameworks.find((f) => f.value === value)?.label
            ) : (
              <span className="text-muted-foreground">Input form</span>
            )}
          </div>
          <ChevronsUpDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0 opacity-50",
              error && "text-red-600"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No result found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={() => {
                  setValue(framework.value);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const ComboBoxStates = () => {
  return (
    <div className="space-y-4 max-w-sm mx-auto border-2 border-dashed p-4 rounded-xl">
      <div>
        <label className="text-sm mb-1 block">Label</label>
        <ComboBox disabled />
      </div>
      <div>
        <label className="text-sm mb-1 block">Label</label>
        <ComboBox />
      </div>
      <div>
        <label className="text-sm mb-1 block">Label</label>
        <ComboBox error />
      </div>
      <div>
        <label className="text-sm mb-1 block">Label</label>
        <ComboBox selected />
      </div>
    </div>
  );
};

export default ComboBoxStates;
