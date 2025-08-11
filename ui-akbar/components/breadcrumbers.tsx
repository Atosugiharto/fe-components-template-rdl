import { Home } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Breadcrumbers() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home Icon */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="/" className="text-neutral-5">
              <Home className="size-4" />
            </a>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Breadcrumb steps - muted */}
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-neutral-5">
            Label
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-neutral-5">
            Label
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-neutral-5">
            Label
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold text-neutral-9 font-size-14">
            Label
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
