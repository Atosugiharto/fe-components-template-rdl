import { ArrowUp, Thermometer } from "lucide-react";
import CloudIcon from "./cloud_icon";

type CardSummaryProps = {
  title: string;
  value: string | number;
  change?: string; // e.g., "+1.2°C"
  isPositive?: boolean;
  backgroundColor?: string;
};

export default function CardSummaryTemperatureColor({
  title,
  value,
  change,
  isPositive = true,
  backgroundColor = "var(--gradient-white-blue)",
}: CardSummaryProps) {
  return (
    <div
      className="relative rounded-xl p-[12px] w-[328px] h-[131px] shadow-sm border-none flex flex-col justify-between overflow-hidden"
      style={{
        background: backgroundColor,
      }}
    >
      {/* CloudIcon absolute di kanan bawah */}
      <div className="absolute -bottom-2 right-0 pointer-events-none">
        <CloudIcon className="text-white/30 w-[63px] h-[101px]" />
      </div>

      {/* Header Flex: Icon + Title */}
      <div className="flex items-center gap-2 z-10">
        <div className="bg-white/30 p-2 rounded-full">
          <Thermometer className="text-black w-4 h-4" />
        </div>
        <p className="text-sm text-black font-medium">{title}</p>
      </div>

      {/* Nilai utama */}
      <p className="text-3xl font-semibold text-black z-10">{value}</p>

      {/* Label "today" + perubahan */}
      <div className="flex items-center justify-between z-10">
        <span className="text-gray-600 text-sm">today</span>

        {change && (
          <div className="flex items-center gap-1 text-sm bg-white rounded-full py-1 px-3">
            <ArrowUp
              className={`w-4 h-4 ${
                isPositive ? "text-green-500" : "rotate-180 text-red-500"
              }`}
            />
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {change}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
