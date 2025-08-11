import { useState } from "react";

export const useTextareaInput = (maxAmount: number) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;

        if (value.length <= maxAmount) {
            setText(value);
        }
    };

    return { text, setText, handleChange };
};
