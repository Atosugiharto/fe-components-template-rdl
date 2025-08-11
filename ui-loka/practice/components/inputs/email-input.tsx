import React, { forwardRef, useImperativeHandle } from "react";
import { Mail, AlertCircle } from "lucide-react";
import { useEmailInput } from "@/hooks/use-email-input";
import AuthInputWrapper from "./wrapper/auth-input-wrapper";

interface EmailInputProps {
    label: string;
    placeholder?: string;
    defaultValue?: string;
    disable?: boolean;
    error?: boolean;
    errorMessage?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface EmailInputRef {
    triggerValidation: () => void;
    resetValidation: () => void;
    isValid: boolean;
    value: string;
}

const EmailInput = forwardRef<EmailInputRef, EmailInputProps>(
    (
        {
            label,
            placeholder,
            onChange,
            defaultValue = "",
            disable,
            error = false,
            errorMessage = "",
        },
        ref
    ) => {
        const {
            value,
            handleChange,
            showError,
            hasValue,
            getDisplayMessage,
            getMessageColor,
            triggerValidation,
            resetValidation,
            isValid,
        } = useEmailInput(defaultValue, error, errorMessage);

        useImperativeHandle(ref, () => ({
            triggerValidation,
            resetValidation,
            isValid,
            value,
        }));

        return (
            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">{label}</label>

                <AuthInputWrapper
                    leftIcon={
                        <Mail
                            size={24}
                            className={
                                showError
                                    ? "text-red-500"
                                    : hasValue
                                    ? "text-neutral-9"
                                    : "text-neutral-6"
                            }
                        />
                    }
                    rightIcon={
                        showError && <AlertCircle size={24} className="text-red-500" />
                    }
                    showError={showError}
                >
                    <input
                        type="email"
                        placeholder={placeholder}
                        onChange={(e) => {
                            handleChange(e);
                            onChange?.(e);
                        }}
                        value={value}
                        disabled={disable}
                        className="bg-neutral-3"
                    />
                </AuthInputWrapper>

                {getDisplayMessage() && (
                    <p className={`text-sm ${getMessageColor()}`}>
                        {getDisplayMessage()}
                    </p>
                )}
            </div>
        );
    }
);

EmailInput.displayName = "EmailInput";

export default EmailInput;