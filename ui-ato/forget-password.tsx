import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Eye, EyeOff, Lock, AlertCircle } from "lucide-react";

const ForgetPassword = () => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleContinue = () => {
    if (!password) {
      setError(true);
    } else {
      setError(false);
      // Lakukan aksi submit
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-4">
      {/* Gambar */}
      <img src="/forgot-password.svg" alt="Lock" className="w-24 h-24" />

      {/* Title */}
      <h2 className="text-lg font-semibold text-center">Input your password</h2>
      <p className="text-sm text-muted-foreground text-center">
        Please confirm your password to reset PIN
      </p>

      {/* Input password dengan icon */}
      <div className="w-full">
        <label className="text-sm font-medium mb-1 block">Password</label>
        <div
          className={`flex items-center border rounded-md px-2 ${
            error ? "border-red-500" : "border-input"
          }`}
        >
          <Lock className="w-4 h-4 text-muted-foreground" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Input your password"
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <EyeOff
              className="w-4 h-4 text-muted-foreground cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="w-4 h-4 text-muted-foreground cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        {/* Tooltip error */}
        {error && (
          <TooltipProvider>
            <Tooltip open={error}>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1 text-red-500 mt-1">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs">
                    Please input fill out this field
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-red-500 text-white text-xs rounded px-2 py-1"
              >
                Please input fill out this field
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {/* Button */}
      <Button variant={error || !password ? "outline" : "gradien"} className="w-full" disabled={!password} onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
}

export default ForgetPassword