import * as React from "react";
import { cn } from "@/utils/cn";
import {Slot} from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 font-medium text-sm whitespace-nowrap rounded-lg transition-all disabled:pointer-events-none disabled:border-0 disabled:bg-grey-100 disabled:text-neutral-7",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    "outline-none focus-visible:border-ring focus-visible:ring-black focus-visible:ring-[1.5px]",
    "aria-invalid:ring-red-500/20 aria-invalid:border-red-500",
  ].join(" "),
  {
    variants: {
      variant: {
        outline: "border hover:bg-neutral-4/50 active:bg-neutral-5/50",
        dangers: "text-white bg-red-500 hover:bg-red-600 active:bg-red-700",
        primary: "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
        success: "text-white bg-green-500 hover:bg-green-600 active:bg-green-700",
        warning: "text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700",
        softBlue: "text-blue-400 border border-[1px] border-blue-200 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 font-semibold",
        gradien: [
          "text-white",
          "bg-[linear-gradient(90deg,#1874A5,#A31AF2)]",
          "hover:bg-[linear-gradient(0deg,#ffffff33_0%,#ffffff33_100%),linear-gradient(283deg,#A31AF2_6%,#1874A5_97%)]",
         "active:bg-[linear-gradient(0deg,#00000033_0%,#00000033_100%),linear-gradient(283deg,#A31AF2_6%,#1874A5_97%)]",
        ].join(" "),
      },
      size: {
        iconSm: "size-[32px]",
        iconMd: "size-[44px]",
        iconLg: "size-[52px]",
        sm: "h-[32px] text-[12px]",
        md: "h-[44px] text-[14px]",
        lg: "h-[52px] text-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

const Button = ({
  size,
  variant,
  className,
  asChild = false,
  ...props
}: ButtonProps) =>  {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }