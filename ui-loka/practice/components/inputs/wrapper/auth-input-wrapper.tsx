import React, { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface AuthInputWrapperProps {
    children: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    showError?: boolean;
}

const AuthInputWrapper: React.FC<AuthInputWrapperProps> = ({
    children,
    leftIcon,
    rightIcon,
    showError = false,
    }) => {
    return (
        <div className="relative w-fit">
            {leftIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {leftIcon}
                </div>
            )}

            {rightIcon && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {rightIcon}
                </div>
            )}

            {React.isValidElement(children) &&
                React.cloneElement(children as React.ReactElement<{className?: string}>, {
                    className: cn(
                            "min-w-[380px] rounded-lg px-3 py-[11px] placeholder:text-sm text-sm focus:outline-none h-[46px]",
                            showError
                                ? "border border-red-500 bg-transparent placeholder:text-red-500"
                                : "bg-neutral-3 placeholder:text-neutral-6",
                                leftIcon ? "pl-11" : "",
                                rightIcon ? "pr-11" : ""
                        ),
                    })}
        </div>
    );
};

export default AuthInputWrapper;
