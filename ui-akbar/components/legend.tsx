export default function LegendPieChart({
  items,
}: {
  items: { label: string; color: string }[];
}) {
  const firstRow = items.slice(0, 6);
  const secondRow = items.slice(6);
  const emptySlots = 6 - secondRow.length;

  return (
    <div className="flex flex-col gap-y-2 text-sm">
      {/* Baris 1 */}
      <div className="grid grid-cols-6 gap-x-6">
        {firstRow.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Baris 2 */}
      <div className="grid grid-cols-6 gap-x-6">
        {secondRow.map((item, idx) => (
          <div key={idx + 6} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.label}</span>
          </div>
        ))}

        {/* Tambahkan div kosong agar rata */}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
      </div>
    </div>
  );
}
