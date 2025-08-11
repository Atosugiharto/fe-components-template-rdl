
import { cn } from "@/utils/cn" // atau bisa pakai clsx langsung

export type RadioCardOption = {
  value: string
  label: string
  description?: string
  image?: string
  disabled?: boolean
}

type RadioCardGroupProps = {
  options: RadioCardOption[]
  value: string
  onChange: (value: string) => void
}

export function RadioCardGroup({ options, value, onChange }: RadioCardGroupProps) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <RadioCard
          key={option.value}
          option={option}
          checked={value === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

type RadioCardProps = {
  option: RadioCardOption
  checked: boolean
  onChange: (value: string) => void
}

function RadioCard({ option, checked, onChange }: RadioCardProps) {
  const { value, label, description, image, disabled } = option

  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 rounded-lg border transition-colors",
        checked ? "border-blue-500 bg-blue-50" : "border-gray-300",
        !disabled && "hover:bg-gray-100 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={() => {
        if (!disabled) onChange(value)
      }}
    >
      <div className="flex items-center space-x-4">
        {image && (
          <img src={image} alt={label} className="w-10 h-10 rounded-full object-cover" />
        )}
        <div>
          <p className="font-semibold">{label}</p>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      <div
        className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center mb-8",
          checked ? "border-blue-500" : "border-gray-400"
        )}
      >
        <div
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-transform",
            checked ? "bg-blue-500 scale-100" : "scale-0"
          )}
        />
      </div>
    </div>
  )
}
