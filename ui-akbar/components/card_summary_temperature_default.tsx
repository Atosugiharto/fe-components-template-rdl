import { ArrowUp } from "lucide-react"; // Gunakan lucide-react (atau ganti sesuai icon library kamu)
import { Thermometer } from "lucide-react"; // Gambar ikon termometer

type CardSummaryProps = {
    title: string;
    value: string | number;
    change?: string; // contoh: "+1.2°C"
    isPositive?: boolean;
};

export default function CardSummaryTemperatureDefault({
    title,
    value,
    change,
    isPositive = true,
}: CardSummaryProps) {
    return (
        <div className="relative bg-white rounded-xl p-[12px] w-[328px] h-[131px] shadow-sm border-none">
            {/* Header Flex: Icon kiri - Judul - Icon kanan */}
            <div className="flex items-center justify-between mb-[8px]">
                <div className="bg-red-100 p-2 rounded-full">
                    <Thermometer className="text-red-500 w-4 h-4" />
                </div>

                <p className="text-sm text-gray-700 flex-1 ml-2">{title}</p>

                <div className="bg-red-100 p-2 rounded-full">
                    <Thermometer className="text-red-500 w-4 h-4" />
                </div>
            </div>


            {/* Nilai utama */}
            <p className="text-3xl font-semibold text-black">{value}</p>

            {/* Perubahan */}
            {change && (
                <div className="flex items-center gap-1 mt-2 text-sm">
                    <ArrowUp
                        className={`w-4 h-4 ${isPositive ? "text-green-500" : "rotate-180 text-red-500"
                            }`}
                    />
                    <span className={isPositive ? "text-green-500" : "text-red-500"}>
                        {change}
                    </span>
                    <span className="text-gray-500">from last hour</span>
                </div>
            )}
        </div>
    );
}
