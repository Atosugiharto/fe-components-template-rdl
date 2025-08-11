import { Check, X, Minus, Loader } from "lucide-react"
import React from "react"

type StepStatus = "completed" | "canceled" | "inprogress" | "pending"

interface Step {
  title: string
  step: string
  status: StepStatus
}

const statusConfig: Record<
  StepStatus,
  { icon: React.ReactNode; color: string; label: string; labelColor: string }
> = {
  completed: {
    icon: <Check className="text-white" size={20} />,
    color: "bg-green-500",
    label: "Completed",
    labelColor: "bg-green-100 text-green-700",
  },
  canceled: {
    icon: <X className="text-white" size={20} />,
    color: "bg-red-500",
    label: "Canceled",
    labelColor: "bg-red-100 text-red-700",
  },
  inprogress: {
    icon: <Loader className="text-white animate-spin" size={20} />,
    color: "bg-orange-400",
    label: "In Progress",
    labelColor: "bg-orange-100 text-orange-700",
  },
  pending: {
    icon: <Minus className="text-white" size={20} />,
    color: "bg-gray-400",
    label: "Pending",
    labelColor: "bg-gray-100 text-gray-700",
  },
}

const ProgressStepper = () => {
  const steps: Step[] = [
    { title: "Sect. Head", step: "Step 1", status: "completed" },
    { title: "Dept. Head", step: "Step 2",status: "completed" },
    { title: "HR Staff", step: "Step 3", status: "pending" },
    { title: "HR Sect. Head", step: "Step 4", status: "pending" },
    { title: "HR Dept. Head", step: "Step 5", status: "pending" },
    { title: "HR Sect. Head", step: "Step 4", status: "pending" },
    { title: "HR Dept. Head", step: "Step 5", status: "pending" },
  ]

  return (
    <div className="flex items-center justify-between gap-4">
      {steps.map((step, idx) => {
        const { icon, color, label, labelColor } = statusConfig[step.status]
        return (
          <React.Fragment key={step.title}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${color}`}>
                {icon}
              </div>
              <div
                className={`flex items-center gap-1 text-xs mt-1 px-2 py-0.5 rounded-full ${labelColor}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    step.status === "completed"
                      ? "bg-green-500"
                      : step.status === "canceled"
                      ? "bg-red-500"
                      : step.status === "inprogress"
                      ? "bg-orange-400"
                      : "bg-gray-400"
                  }`}
                ></span>
                {label}
              </div>
              <p className="text-xs text-neutral-7 mt-1">{step.step}</p>
            </div>

            {/* Garis penghubung kecuali di step terakhir */}
            {idx < steps.length - 1 && (
              <div className="flex-1 h-px bg-gray-300"></div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default ProgressStepper