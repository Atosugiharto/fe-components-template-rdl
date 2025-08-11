import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface DataItem {
  label: string;
  value: string;
}

interface CardDataProps {
  data: DataItem[];
}

export const CardComponent: React.FC<CardDataProps> = ({ data = []  }) => {
  return (
    <Card className="p-6 w-full mx-auto shadow-sm border rounded-xl">
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
        {data.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 text-sm font-medium leading-tight">
              {item.label}
            </p>
            <p
              className={`text-base font-semibold mt-1 ${
                item.value === "Urgent"
                  ? "text-red-600 bg-red-100 px-3 py-1 rounded-full inline-block"
                  : "text-gray-800"
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Example usage
const exampleData: DataItem[] = [
  { label: "Company ID", value: "003" },
  { label: "Reg No", value: "0-003" },
  { label: "Company Group", value: "Mayora Indah Group" },
  { label: "Company Type", value: "Dalam Negeri (DN)" },
  { label: "Type Dalam Negeri (DN)", value: "PT" },
  { label: "Company Name", value: "PT. Sinar Pangan Barat/Timur" },
  { label: "Country", value: "Indonesia" },
  { label: "Province", value: "DKI Jakarta" },
  { label: "City", value: "East Jakarta" },
  { label: "Address", value: "Soekarno Hatta Street Num.123" },
  { label: "NIB", value: "9878230" },
  { label: "Contact Person", value: "Budi Setiawan" },
  { label: "Contact Person (Mobile Phone)", value: "+628134567890" },
  { label: "Source of Information", value: "Website" },
  { label: "Referral aReferal Code (HP)", value: "278HG" },
  { label: "MHO Name", value: "Hasan Waulat" },
  { label: "Referral Code (MHO)", value: "-" },
  { label: "Position", value: "Staff" },
  { label: "Business Scale", value: "Large" },
  { label: "Service Type", value: "Full" },
  { label: "Customer Status", value: "New" },
  { label: "Marketing Area", value: "National" },
  { label: "Registration Status", value: "Renewal" },
  { label: "Category Leads", value: "Hot Leads" },
  { label: "Status Progress Leads", value: "Raw Leads" },
  { label: "Urgent Level", value: "Urgent" },
  { label: "Remark", value: "-" },
];

export default function CardData() {
  return <CardComponent data={exampleData} />;
}
