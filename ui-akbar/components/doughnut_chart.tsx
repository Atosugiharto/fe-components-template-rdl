
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
    { browser: "chrome", visitors: 27, fill: "#4f46e5" },   // Indigo-600
    { browser: "safari", visitors: 20, fill: "#22c55e" },   // Green-500
    { browser: "firefox", visitors: 87, fill: "#f97316" },  // Orange-500
    { browser: "edge", visitors: 9, fill: "#06b6d4" },     // Cyan-500
    { browser: "other", visitors: 190, fill: "#a855f7" },    // Purple-500
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

export function DoughnutChart() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={60}
                            stroke="none"
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                {/* Tampilkan "Total" di atas angka */}
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 25}
                                                    className="fill-muted-foreground text-sm text-gray-500"
                                                >
                                                    Total
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 10}
                                                    className="fill-foreground text-3xl font-bold text-neutral-9"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />

                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
        </div>
    )
}
