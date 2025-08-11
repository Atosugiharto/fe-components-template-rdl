import { cn } from "@/utils/cn";
import { useState } from "react";

type LinkInputProps = {
    disabled?: boolean;
}

export default function LinkInput({ disabled = false }: LinkInputProps) {

    const [value, setValue] = useState("");

    return (
        <label className="flex">
            <div className={
                cn(
                    "flex h-[46px] w-[375px] rounded-lg",
                    disabled? "bg-grey-100" : "bg-neutral-3"
                )
            }>
                <div className="flex justify-center items-center border-r-1 border-grey-100 px-[10px] bg-neutral-3 rounded-l-lg">
                    <p 
                        className={cn(
                            "text-sm",
                            disabled || value ? "text-neutral-9" : "text-neutral-6"
                        )}
                    >
                        https://
                    </p>
                </div>
                <div className="flex items-center px-2 py-[13.5px] w-full h-full">
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} disabled={disabled} placeholder="Link URL" className={cn(
                        "text-sm focus:outline-none w-full",
                        disabled ? "placeholder:text-neutral-9" : "placeholder:text-neutral-6"
                    )}/>
                </div>
            </div>
        </label>
    );
}
