import { cn } from "@/utils/cn";

type InvoiceField = {
    label: string;
    value: React.ReactNode;
};

type InvoiceDetailProps = {
    grid: string;
    fields: InvoiceField[];
    parentProps?: React.HTMLAttributes<HTMLDivElement>;
    gridProps?: React.HTMLAttributes<HTMLDivElement>;
};

export default function InvoiceDetail({ fields, grid, parentProps, gridProps }: InvoiceDetailProps) {
    return (
        <div
            {...parentProps}
            className={cn("flex bg-neutral-2 border rounded-xl", parentProps?.className)}
        >
            <div
                {...gridProps}
                className={cn(
                    "grid w-full",
                    grid === "1" && "grid-cols-1",
                    grid === "2" && "grid-cols-2",
                    grid === "3" && "grid-cols-3",
                    grid === "4" && "grid-cols-4",
                    gridProps?.className
                )}
            >
                {fields.map((field, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <p className="text-sm text-neutral-7">{field.label}</p>
                        <p className="text-neutral-9 font-semibold">{field.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
