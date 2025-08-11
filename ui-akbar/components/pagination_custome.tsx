import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
//   ChevronDown,
} from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PaginationCustome() {
  return (
    <div className="flex justify-between items-center w-full px-2 py-4">
      {/* Left side: Rows text */}
      <div className="text-sm text-muted-foreground whitespace-nowrap">10 Rows</div>

      {/* Center: Pagination */}
      <Pagination>
        <PaginationContent className="gap-1">
          <PaginationItem>
            <Button variant="outline" size="iconSm" className="border-none">
              <ChevronsLeft className="w-4 h-4 text-neutral-6" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="iconSm" className="border-none">
              <ChevronLeft className="w-4 h-4 text-neutral-6" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border border-gray-50 text-neutral-6">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border border-gray-50 text-neutral-6">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="iconSm" className="border-none">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button variant="outline" size="iconSm" className="border-none">
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Right side: Rows per page selector */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
        Rows per page
        <Select defaultValue="10">
          <SelectTrigger className="w-[60px] h-8 px-2 border-none bg-neutral-3">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
