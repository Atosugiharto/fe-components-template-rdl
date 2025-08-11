"use client"

import { BarChart, Bar, XAxis, YAxis } from "recharts"

type BarChartStackProps = {
  format?: "full" | "month" // <- optional, default ke "full"
}

export function BarChartStack({ format = "full" }: BarChartStackProps) {
  const chartData = [
    {
      date: "2024-10-24",
      a: 100,
      b: 100,
      c: 100,
      d: 100,
      e: 100,
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

  const label = formatDateLabel(chartData[0].date, format)

  return (
    <div className="flex flex-col items-center justify-center">
      <BarChart
        width={60}
        height={135}
        data={chartData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        barCategoryGap={0}
      >
        <XAxis dataKey="date" hide />
        <YAxis hide />

        <Bar dataKey="a" stackId="stack" fill="#A2E6ED" />
        <Bar dataKey="b" stackId="stack" fill="#1CB5C3" />
        <Bar dataKey="c" stackId="stack" fill="#4299FF" />
        <Bar dataKey="d" stackId="stack" fill="#867DFF" />
        <Bar dataKey="e" stackId="stack" fill="#4B3EC9" radius={[6, 6, 0, 0]} />
      </BarChart>

      <div className="text-[14px] font-regular text-gray-500 mt-2">
        {label}
      </div>
    </div>
  )
}
