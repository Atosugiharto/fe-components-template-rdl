import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts"

type BarChartVerticalGradientProps = {
    format? : "full" | "month"  
}

export function BarChartVerticalGradient({ format = "full" }: BarChartVerticalGradientProps) {
  const data = [
    {
      month: "2024-10-24",
      valueMain: 40, // Bar gradient
      valueTop: 1,   // Bar biru solid di atas
    },
  ]

   const formatDateLabel = (dateStr: string, format: "full" | "month") => {
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()

    if (format === "month") {
      return date.toLocaleDateString("id-ID", { month: "long" }) // e.g. Oktober
    }

    return `${day}/${month}/${year}`
  }

  const label = formatDateLabel(data[0].month, format)

  return (
    <div className="flex flex-col items-center justify-center">
      <BarChart
        width={140}
        height={360}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        barCategoryGap={0}
      >
        <XAxis dataKey="month" hide />
        <YAxis hide domain={[0, 200]} />

        {/* Bar atas (biru solid) */}
        {/* Bar utama (gradient) */}
        <Bar
          dataKey="valueMain"
          fill="url(#colorGradient)"
          barSize={82}
          stackId="a" // <--- penting
        />
        <Bar
          dataKey="valueTop"
          fill="#1D4ED8"
          barSize={82}
          radius={[0, 0, 0, 0]}
          stackId="a" // <--- penting
        />


        {/* Gradient */}
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
      </BarChart>

      <div className="text-[14px] text-gray-500 mt-2">
        {label}
      </div>
    </div>
  )
}
