import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OTPForm = () => {
  const [value, setValue] = React.useState("");

  const isDisabled = value.length < 4;

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-4">
      {/* Gambar ilustrasi */}
      <img src="/otp-image.svg" alt="OTP" className="w-32 h-24" />

      {/* Judul */}
      <h2 className="text-lg font-semibold text-center">Check your email</h2>
      <p className="text-sm text-muted-foreground text-center">
        Input the OTP sent to your email
      </p>

      {/* Input OTP */}
      <InputOTP maxLength={4} value={value} onChange={(val) => setValue(val)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="w-12 h-12 text-lg font-semibold" />
          <InputOTPSlot index={1} className="w-12 h-12 text-lg font-semibold" />
          <InputOTPSlot index={2} className="w-12 h-12 text-lg font-semibold" />
          <InputOTPSlot index={3} className="w-12 h-12 text-lg font-semibold" />
        </InputOTPGroup>
      </InputOTP>

      {/* Forgot PIN */}
      <a href="#" className="text-sm text-blue-500 hover:underline">
        Forgot PIN?
      </a>

      {/* Action buttons */}
      <div className="flex w-full justify-between">
        <Button variant="outline" className="px-6">
          Cancel
        </Button>
        <Button variant={isDisabled ? "outline" : "gradien"} disabled={isDisabled} className="px-6">
          Verify
        </Button>
      </div>
    </div>
  );
};

export default OTPForm;
