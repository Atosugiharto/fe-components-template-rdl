import { cn } from "@/utils/cn";

export type ScheduleVariant = "openDate" | "fixDate";;
export type ScheduleSize = "sm" | "md" | "lg";
export type ScheduleProps = {
  variant?: ScheduleVariant;
  size?: ScheduleSize;
  className?: string;
  children?: React.ReactNode;
};

const variantStyles: Record<ScheduleVariant, string> = {
  openDate:
    "flex items-center text-center justify-center border border-orange-100 bg-orange-50 text-orange-500 rounded-full font-normal px-8 py-2",
  fixDate:
    "flex items-center text-center justify-center border border-blue-100 bg-blue-50 text-blue-500 rounded-full font-normal px-8 py-2",
};

const sizeStyles: Record<ScheduleSize, string> = {
    sm: "h-[32px] text-[12px]",
    md: "h-[44px] text-[14px]",
    lg: "h-[52px] text-[16px]",
};

const dotColors: Record<ScheduleVariant, string> = {
  openDate: "bg-orange-500",
  fixDate: "bg-blue-500"
};

export function ScheduleType({
  variant = "openDate",
  size = "sm",
  className,
  children,
}: ScheduleProps) {
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
