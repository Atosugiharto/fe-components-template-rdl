import { cn } from "@/utils/cn";
import { useTextareaInput } from "@/hooks/use-textarea-input";

type TextareaProps = {
    label?: string;
    maxAmount?: number;
    disabled?: boolean;
    error?: boolean;
};

const TextareaInput = ({ label, maxAmount = 500, disabled = false, error = false }: TextareaProps) => {

    const { text, handleChange} = useTextareaInput(maxAmount);

    const isError = error || text.length >= maxAmount;

    return (
        <div className="flex flex-col gap-y-2 w-[266px]">
            <textarea
                placeholder="Type your message..."
                value={text}
                onChange={handleChange}
                disabled={disabled}
                className={cn(
                    `text-sm bg-neutral-3 p-3 rounded-lg max-w-[266px] min-h-[117px] focus:outline-none`,
                    disabled ? "bg-grey-100" : "bg-neutral-3",
                    isError ? "border-red-500 border-1 bg-transparent" : null
                )}
            />
            <div 
                className={cn(
                    "flex justify-between",
                    disabled ? 'text-neutral-9' : text ? "text-neutral-9" : "text-neutral-6"
                )}
            >
                <p className="text-sm">{label}</p>
                <p
                    className={`text-sm`}
                >
                    {text.length}/{maxAmount}
                </p>
            </div>
        </div>
    );
};

export default TextareaInput;
