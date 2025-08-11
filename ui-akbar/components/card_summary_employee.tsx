import { Users, MoreHorizontal } from "lucide-react"; // Tambahkan ikon more

type CardSummaryProps = {
  title: string;
  value: string | number;
  description?: string;
};

export default function CardSummaryEmployee({
  title,
  value,
  description = "Jumlah seluruh karyawan yang terdaftar.",
}: CardSummaryProps) {
  return (
    <div className="relative bg-white rounded-xl w-[328px] h-[131px] shadow-sm border-none">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#EEF4FF] px-4 py-2 rounded-t-xl">
        <div className="flex items-center gap-2">
          <Users className="text-black w-4 h-4" />
          <p className="text-sm text-black font-medium">{title}</p>
        </div>
        <MoreHorizontal className="text-gray-400 w-4 h-4" />
      </div>

      {/* Isi konten */}
      <div className="px-6 py-4">
        {/* Nilai utama */}
        <p className="text-3xl font-semibold text-black">{value}</p>

        {/* Deskripsi */}
        <p className="text-sm text-gray-500 mt-1">{description}</p>

        {/* (Opsional) Perubahan nilai */}
        {/* {change && (
          <div className="flex items-center gap-1 mt-2 text-sm">
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {change}
            </span>
            <span className="text-gray-500">from last hour</span>
          </div>
        )} */}
      </div>
    </div>
  );
}
