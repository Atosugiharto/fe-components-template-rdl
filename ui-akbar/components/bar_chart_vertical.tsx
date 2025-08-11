"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

type BarChartVerticalProps = {
  format?: "full" | "month"
}

export function BarChartVertical({ format = "full" }: BarChartVerticalProps) {
  const data = [
    {
      month: "2024-10-24",
      a: 100,
      b: 80,
      c: 120,
      d: 110,
      e: 140,
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

  const colors = ["#A2E6ED", "#1CB5C3", "#4299FF", "#867DFF", "#4B3EC9"]

  // Ambil keys selain 'month'
  const barKeys = Object.keys(data[0]).filter((key) => key !== "month")

  return (
    <div className="flex flex-col items-center justify-center">
      <BarChart
        width={140}
        height={180}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        barCategoryGap={4}
      >
        <XAxis dataKey="month" hide />
        <YAxis hide />
        <CartesianGrid horizontal={false} vertical={false} />

        {barKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={colors[index] || "#ccc"}
            barSize={12}
            radius={[2, 2, 0, 0]}
            x={index * 2} // geser tiap bar ke kanan
          />
        ))}
      </BarChart>

      {/* Label "Jan" */}
      <div className="text-[14px] text-muted-foreground font-regular text-gray-500 mt-1">
        {label}
      </div>
    </div>
  )
}
