import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Trash2,
  AlertCircle,
  CheckCircle2,
  LogOut,
  Download
} from "lucide-react";

const popUpVariants = {
  delete: {
    icon: <Trash2 className="text-red-500 w-6 h-6" />,
    iconBg: "bg-red-50",
    title: "Delete?",
    description: "Are you sure want to delete this data?",
    buttons: [
      { label: "Cancel", variant: "dangers" as const },
      { label: "Delete", variant: "gradien" as const }
    ]
  },
  confirm: {
    icon: <AlertCircle className="text-orange-500 w-6 h-6" />,
    iconBg: "bg-orange-50",
    title: "Confirm!!",
    description: "Are you sure about the data entered?",
    buttons: [
      { label: "Cancel", variant: "dangers" as const },
      { label: "Yes, Confirm", variant: "gradien" as const }
    ]
  },
  success: {
    icon: <CheckCircle2 className="text-green-500 w-6 h-6" />,
    iconBg: "bg-green-50",
    title: "Success!!",
    description: "Your data has been successfully updated.",
    buttons: [
      { label: "Close", variant: "gradien" as const }
    ]
  },
  logout: {
    icon: <LogOut className="text-gray-500 w-6 h-6" />,
    iconBg: "bg-grey-50",
    title: "Logout?",
    description: "Are you sure you want to exit?",
    buttons: [
      { label: "Cancel", variant: "dangers" as const },
      { label: "Logout", variant: "gradien" as const }
    ]
  },
  download: {
    icon: <Download className="text-blue-500 w-6 h-6" />,
    iconBg: "bg-blue-50",
    title: "Download Document?",
    description: "Are you sure want to download document?",
    buttons: [
      { label: "Cancel", variant: "dangers" as const },
      { label: "Download", variant: "gradien" as const }
    ]
  }
};

type PopUpVariant = keyof typeof popUpVariants

export default function PopUp({ variant = "delete" }: { variant?: PopUpVariant}) {
  const data = popUpVariants[variant];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="gradien" size="md">
          {data.title}
        </Button>
      </PopoverTrigger>
    <PopoverContent className="w-100 flex flex-col items-center shadow-[0px_1.75px_4px_-1px_#0F11141A] rounded-xl bg-white">
    {/* Icon */}
    <div className={`${data.iconBg} p-4 rounded-full mb-4`}>
        {data.icon}
    </div>

    {/* Text (title + description) */}
    <div className="flex flex-col items-center gap-1 mb-6">
        <Label className="text-lg font-sans font-semibold">{data.title}</Label>
        <Label className="text-center font-sans text-sm text-neutral-7 font-normal">
        {data.description}
        </Label>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 w-full">
        {data.buttons.map((btn, i) => (
        <Button
            key={i}
            variant={btn.variant}
            className="flex-1 font-sans"
        >
            {btn.label}
        </Button>
        ))}
    </div>
    </PopoverContent>
    </Popover>
  );
}
