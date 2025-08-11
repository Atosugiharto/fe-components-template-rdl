import { useState } from "react";

export const useEmailInput = (defaultValue = "", externalError = false, externalErrorMessage = "") => {
    const [value, setValue] = useState(defaultValue);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [shouldShowValidation, setShouldShowValidation] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        setHasInteracted(true);
        
        setShouldShowValidation(false);

        if (newValue.trim() === "") {
            setIsEmpty(true);
            setIsInvalid(false);
        } else {
            setIsEmpty(false);
            setIsInvalid(!isValidEmail(newValue.trim()));
        }
    };

    const triggerValidation = () => {
        setShouldShowValidation(true);
    };

    const resetValidation = () => {
        setShouldShowValidation(false);
    };

    const trimmedValue = value.trim();
    const hasValue = trimmedValue !== "";

    const showError = shouldShowValidation && (isEmpty || (hasValue && (isInvalid || externalError)));

    const getDisplayMessage = () => {
        if (!shouldShowValidation) return "Please sign in with registered account!";
        if (isEmpty || !hasValue) return "Email cannot be empty";
        if (isInvalid) return "Email does not match";
        if (externalError && externalErrorMessage) return externalErrorMessage;
        return "";
    };

    const getMessageColor = () => (showError ? "text-red-500" : "text-black");

    const isValid = hasValue && !isEmpty && !isInvalid && !externalError;

    return {
        value,
        handleChange,
        showError,
        hasValue,
        getDisplayMessage,
        getMessageColor,
        triggerValidation,
        resetValidation,
        isValid,
    };
};