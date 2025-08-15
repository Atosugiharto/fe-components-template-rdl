import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/utils/cn"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import * as React from "react"
import { type DateRange } from "react-day-picker"
import { Calendar } from "./calendar"

export default function DateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), -20),
    to: new Date(),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn(
              "w-[250px] py-6 justify-start bg-neutral-3 text-neutral-10 text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "| LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] bg-white border border-gray-200 rounded-xl shadow" align="start">
          <div className="flex flex-col items-center">
            <Calendar
              autoFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
              className="w-auto max-w-[300px]"
              classNames={{
                day: "w-9 h-9 text-base transition-colors",
                range_middle: "bg-blue-100 text-blue-900 rounded-none",
                range_start: "bg-primary-500 text-white rounded-l-md rounded-r-none",
                range_end: "bg-primary-500 text-white rounded-r-md rounded-l-none",
                selected: "bg-primary-50 text-neutral-9",
                today: "border-b-2 border-blue-400",
                outside: "text-gray-300",
              }}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}