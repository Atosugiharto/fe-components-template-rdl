import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@radix-ui/react-dropdown-menu";


const popUpVariants = {
  assign: {
    title: "Assign to Auditor",
    titleHead: "Send Audit Offer to Auditor",
    description: "This auditor has been selected. You can now proceed to send the offer.",
    idAuditor: "ID Auditor",
    AuditorName: "Auditor Name",
    id: "A1B2C",
    name: "Budi Santoso",
    buttons: [
      { label: "Cancel", variant: "dangers" as const },
      { label: "Assign to Auditor", variant: "gradien" as const }
    ]
  }
};

type PopUpVariant = keyof typeof popUpVariants

export default function PopUpAssignToAuditor({ variant = "assign" }: { variant?: PopUpVariant}) {
  const data = popUpVariants[variant];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="gradien" size="md">
          {data.title}
        </Button>
      </PopoverTrigger>
    <PopoverContent className="w-100 flex flex-col items-center shadow-[0px_1.75px_4px_-1px_#0F11141A] rounded-xl bg-neutral-1 border-neutral-1">

    {/* Text (title + description) */}
    <div className="flex flex-col items-start gap-2 mb-6">
        <Label className="text-lg font-sans font-semibold">{data.titleHead}</Label>
        <Label className="text-start font-sans text-sm text-neutral-9 font-normal">
        {data.description}
        </Label>

        <div className="flex gap-4 w-full">
        <Label className="w-1/2 text-neutral-9 font-normal font-sans">{data.idAuditor}</Label>
        <Label>{":"}</Label>
        <Label className="w-1/2">{data.id}</Label>
        </div>
        
        <div className="flex gap-4 w-full">
        <Label className="w-1/2 text-neutral-9 font-normal font-sans">{data.AuditorName}</Label>
        <Label>{":"}</Label>
        <Label className="w-1/2">{data.name}</Label>
        </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 w-full">
        {data.buttons.map((btn, i) => (
        <Button
            key={i}
            variant={btn.variant}
            className="flex-1 font-sans w-fit"
        >
            {btn.label}
        </Button>
        ))}
    </div>
    </PopoverContent>
    </Popover>
  );
}
