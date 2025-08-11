export default function LegendPieChart({ items }: { items: { label: string, color: string }[] }) {
  return (
    <div className="grid grid-cols-2  text-sm">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
