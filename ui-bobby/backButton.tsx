import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router";

function GradientChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="chevron-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1874A5" />
          <stop offset="100%" stopColor="#A31AF2" />
        </linearGradient>
      </defs>
      <polyline
        points="15 18 9 12 15 6"
        fill="none"
        stroke="url(#chevron-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackButton({ }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <Link to={"/admin/schedule"}>
    <div className="flex items-center gap-1">
        <GradientChevronLeft aria-label="Back" />
        <Label className="bg-gradient-to-r from-[#1874A5] to-[#A31AF2] bg-clip-text text-transparent font-semibold text-sm">
          Back
        </Label>
    </div>
    </Link>
  )
}

export { BackButton }
