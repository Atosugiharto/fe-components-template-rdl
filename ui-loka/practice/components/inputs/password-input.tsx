import React, { forwardRef, useState } from "react";
import { 
    Lock, 
    Eye, 
    AlertCircle, 
    EyeOff 
} from "lucide-react";

interface PasswordInputProps {
    label: string;
    placeholder?: string;
    defaultValue?: string;
    disable?: boolean;
    error?: boolean;
    errorMessage?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ label, placeholder, onChange, defaultValue, disable, error, errorMessage }, ref) => {

        const [showPassword, setShowPassword] = useState(false);

        const [hasValue, setHasValue] = useState(!!defaultValue);
        
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setHasValue(e.target.value.trim() !== "");
            onChange?.(e);
        };

        const iconColorClass = error
            ? "text-red-500"
            : hasValue
            ? "text-neutral-9"
            : "text-neutral-6";

        return (
            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">{label}</label>

                <div className="relative">
                    <input
                        ref={ref}
                        type={showPassword ? "text" : "password"}
                        placeholder={placeholder}
                        onChange={handleChange}
                        defaultValue={defaultValue}
                        disabled={disable}
                        className={`min-w-[380px] rounded-lg px-3 py-[11px] placeholder:text-sm text-sm focus:outline-none h-[46px]
                            ${error ? "placeholder:text-red-500" : "placeholder:text-neutral-6"}
                            ${error ? "border border-red-500 bg-transparent" : "bg-neutral-3"}
                            ${error ? "pr-10 pl-10" : "pl-11"}`
                        }
                    />

                    <div
                        className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconColorClass}`}
                    >
                        <Lock size={24} />
                    </div>
                    

                    <div
                        className={`absolute gap-2 right-3 top-1/2 -translate-y-1/2 ${iconColorClass}`}
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <Eye size={24} /> : <EyeOff size={24} />}
                        
                        {error && (
                        <div className="absolute right-9 top-1/2 -translate-y-1/2 text-red-500">
                            <AlertCircle size={24} />
                        </div>
                        )}
                    </div>

                    
                </div>

                <div className="flex justify-between">
                    <p className={`text-sm ${error ? "text-red-500" : "text-neutral-9"}`}>
                        {error ? errorMessage || "Password cannot be empty" : ""}
                    </p>
                    <p className="text-sm text-neutral-7">Forgot Password</p>
                </div>
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
