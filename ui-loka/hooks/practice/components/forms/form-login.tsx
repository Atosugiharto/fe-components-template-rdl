import { useRef } from "react";

import EmailInput, { type EmailInputRef } from "../inputs/email-input";
import { Button } from "@/components/ui/buttons/button";

const FormLogin = () => {

    const emailRef = useRef<EmailInputRef>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        emailRef.current?.triggerValidation();
        
        const isEmailValid = emailRef.current?.isValid;
        const emailValue = emailRef.current?.value;
        
        if (isEmailValid) {
            console.log("Form is valid, submitting...", emailValue);
        } else {
            console.log("Form has validation errors");
        }
    };

    return (
        <div className="flex flex-col gap-[35px]">
            <EmailInput
                label="Email"
                placeholder="contoh@gmail.com"
                ref={emailRef}
            />
            <Button
                variant={"gradien"}
                onClick={handleSubmit}
                type="submit"
                className="cursor-pointer"
            >
                Submit
            </Button>
        </div>
    );
};

export default FormLogin;
