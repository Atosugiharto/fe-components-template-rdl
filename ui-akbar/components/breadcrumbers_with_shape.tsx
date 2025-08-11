import { ListChecks } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import React from "react"
import { DateTimeLive } from "@/utils/dateTimeLive"

export function BreadcrumbWithShape() {
  const path = window.location.pathname // contoh: "/admin/users/edit/123"
  const segments = path.split("/").filter(Boolean) // ["admin", "users", "edit", "123"]

  // Untuk menampilkan label yang lebih rapi
  const formatLabel = (segment: string) => {
    return segment
      .replace(/-/g, " ") // ganti "-" dengan spasi
      .replace(/\b\w/g, (char) => char.toUpperCase()) // kapital tiap kata
  }

  return (
    <div className="flex justify-between items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <ListChecks className="w-4 h-4 text-muted-foreground mr-1 text-neutral-5" />
          </BreadcrumbItem>
          {segments.map((seg, idx) => {
            const href = "/" + segments.slice(0, idx + 1).join("/")
            const isLast = idx === segments.length - 1

            return (
              <React.Fragment key={idx}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="font-semibold text-neutral-9 font-size-14">
                      {formatLabel(seg)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <a href={href} className="text-neutral-5">
                        {formatLabel(seg)}
                      </a>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <span className="text-sm text-muted-foreground">
        <DateTimeLive />
      </span>
    </div>
  )
}
