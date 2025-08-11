

type CardSummaryProps = {
    title: string;
    value: string | number;
}

export default function CardSummary({ title, value }: CardSummaryProps) {
    return (
    <div className="bg-gray-100 rounded-xl p-6 w-[286px]">
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-2xl font-semibold text-black mt-1">{value}</p>
    </div>
    )
}