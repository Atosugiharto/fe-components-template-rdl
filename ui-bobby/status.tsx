import { cn } from "@/utils/cn";

export type StatusVariant = "submitted" | "success" | "decline" | "process" | "readyToSchedule" | "accepted" | "assigned";
export type StatusSize = "sm" | "md" | "lg";
export type StatusProps = {
  variant?: StatusVariant;
  size?: StatusSize;
  className?: string;
  children?: React.ReactNode;
};

const variantStyles: Record<StatusVariant, string> = {
  submitted:
    "border border-blue-100 bg-blue-50 text-blue-500 rounded-md font-normal px-3 py-2",
  success:
    "border border-green-100 bg-green-50 text-green-500 rounded-md font-normal px-3 py-2",
  decline:
    "border border-red-100 bg-red-50 text-red-500 rounded-md font-normal px-3 py-2",
  process:
    "border border-orange-100 bg-orange-50 text-orange-500 rounded-md font-normal px-3 py-2",
  readyToSchedule:
    "flex items-center text-center justify-center border border-blue-100 bg-blue-50 text-blue-500 rounded-full font-normal px-2 py-2",
  accepted:
    "flex items-center text-center justify-center border border-green-100 bg-green-50 text-green-500 rounded-full font-normal px-2 py-2",
  assigned:
    "flex items-center text-center justify-center border border-orange-100 bg-orange-50 text-orange-500 rounded-full font-normal px-2 py-2",
};

const sizeStyles: Record<StatusSize, string> = {
    sm: "h-[32px] text-[12px]",
    md: "h-[44px] text-[14px]",
    lg: "h-[52px] text-[16px]",
};

const dotColors: Record<StatusVariant, string> = {
  submitted: "bg-blue-500",
  success: "bg-green-500",
  decline: "bg-red-500",
  process: "bg-orange-500",
  readyToSchedule: "bg-blue-500",
  accepted: "bg-green-500",
  assigned: "bg-orange-500",
};

export function Status({
  variant = "submitted",
  size = "md",
  className,
  children,
}: StatusProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-medium select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <span
        className={cn(
          "inline-block w-2 h-2 rounded-full",
          dotColors[variant]
        )}
      />
      {children ?? (variant.charAt(0).toUpperCase() + variant.slice(1))}
    </span>
  );
}
