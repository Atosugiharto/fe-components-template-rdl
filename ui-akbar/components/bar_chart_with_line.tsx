// BarChartWithLine.tsx
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import type { ChartConfiguration, TooltipItem } from "chart.js";

Chart.register(...registerables);

const idr = new Intl.NumberFormat("id-ID");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const quantityData = [90, 150, 185, 50, 190, 95, 150, 210, 170, 65, 20, 175];
const rupiahData = [160_000, 180_000, 195_000, 170_000, 140_000, 120_000, 95_000, 75_000, 105_000, 125_000, 145_000, 165_000];

export default function BarChartWithLine() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current!.getContext("2d")!;

    // Buat gradient statis untuk bar
    const barGradient = ctx.createLinearGradient(0, 0, 0, 300);
    barGradient.addColorStop(0, "#1874A5"); // top
    barGradient.addColorStop(1, "#FFFFFF"); // bottom

    const config: ChartConfiguration<"bar" | "line", number[], string> = {
      type: "bar",
      data: {
        labels: MONTHS,
        datasets: [
          {
            type: "bar",
            label: "Quantity",
            yAxisID: "yQty",
            data: quantityData,
            backgroundColor: barGradient, // gradient statis
            borderSkipped: false,
            borderWidth: 1,
            borderColor: "transparent",
            borderRadius: { topLeft: 0, topRight: 0 },
            barPercentage: 1,
            categoryPercentage: 1,
            order: 2, // bar di belakang line
          } as any,
          {
            type: "line",
            label: "Rupiah (Rp)",
            yAxisID: "yRp",
            data: rupiahData,
            tension: 0.35,
            borderWidth: 3,
            borderColor: "#6b00ff",
            pointBackgroundColor: "#6b00ff",
            pointBorderColor: "#ffffff",
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 5,
            order: 1, // line di depan bar (nilai lebih kecil = di depan)
          } as any,
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              boxWidth: 8,
            },
          },
          tooltip: {
            backgroundColor: "#ffffff",
            titleColor: "#111827",
            bodyColor: "#111827",
            borderColor: "rgba(0,0,0,0.08)",
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            callbacks: {
              title(items) {
                const i = items[0];
                return `${i.label} 2025`;
              },
              label(item: TooltipItem<"bar" | "line">) {
                if (item.dataset.yAxisID === "yQty") {
                  const v = typeof item.raw === "number" ? item.raw : Number(item.formattedValue);
                  return ` Quantity : ${v}`;
                }
                const v = typeof item.raw === "number" ? item.raw : Number(item.formattedValue);
                return ` Rupiah (Rp) : ${idr.format(v)}`;
              },
            },
          },
          ...({ datalabels: { display: false } } as any),
        },
        scales: {
          x: {
            offset: false,
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
            border: {
              display: false
            },
            ticks: { color: "#6b7280" },
          },
          yQty: {
            type: "linear",
            position: "left",
            title: { display: true, text: "Quantity" },
            grid: {
              drawOnChartArea: false,
              display: false
            },
            border: {
              display: false
            },
            suggestedMin: 0,
          },
          yRp: {
            type: "linear",
            position: "right",
            title: { display: true, text: "Rupiah (RP)" },
            grid: {
              drawOnChartArea: false,
              display: false
            },
            border: {
              display: false
            },
            suggestedMin: 0,
            ticks: {
              callback: (v) => (typeof v === "number" ? `Rp ${idr.format(v)}` : String(v)),
            },
          },
        },
      },
    };

    chartRef.current = new Chart(ctx, config);
    return () => chartRef.current?.destroy();
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: 1200 }}>
      <div style={{ height: 320 }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
