const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function LabelMounth() {
  return (
    <div>
      <div className="flex gap-4 text-gray-500 text-sm">
        {months.map((month) => (
          <span key={month} className="cursor-pointer hover:text-black transition">
            {month}
          </span>
        ))}
      </div>
    </div>
  )
}
