import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CheckboxWithText from "../../../components/checkbox";
import type { ScheduleVariant } from "../../../components/ui/schedule-type";
import type { StatusVariant } from "../../../components/ui/status";
import { Status } from "@/components/ui/status";
import { ScheduleType } from "../../../components/ui/schedule-type";
import type { ScheduleData, TableScheduleProps } from "../types/types";
import { schedules } from "../types/schedule-data";
import { Ellipsis, Eye } from "lucide-react";

export const scheduleTypeVariantMap: Record<string, ScheduleVariant> = {
  "Open Date": "openDate",
  "Fix Date": "fixDate",
};

export const statusVariantMap: Record<string, StatusVariant> = {
  "Ready to Schedule": "readyToSchedule",
  "Accepted": "accepted",
};

export default function TableSchedule({ data = schedules }: TableScheduleProps) {
  const columns = [
    { key: "checkbox", label: "" },
    { key: "action", label: "Action" },
    { key: "regNo", label: "Reg. No" },
    { key: "soNumber", label: "SO Number" },
    { key: "companyId", label: "Company ID" },
    { key: "companyName", label: "Company Name" },
    { key: "marketingArea", label: "Marketing Area" },
    { key: "serviceType", label: "Services Type" },
    { key: "pic", label: "PIC" },
    { key: "scheduleAudit", label: "Schedule Audit" },
    { key: "totalPrice", label: "Total Price" },
    { key: "transportation", label: "Transportation" },
    { key: "accommodation", label: "Accommodation" },
    { key: "scheduleType", label: "Schedule Type" },
    { key: "status", label: "Status" },
  ] as const;

  return (
    <Table className="text-sm rounded-t-lg overflow-hidden">
      <TableHeader className="bg-neutral-3 h-12 font-sans">
        <TableRow className="border-b border-neutral-1">
          {columns.map((col) => (
            <TableHead key={col.key}>
              {col.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={idx} className="border-b border-gray-100">
            {columns.map((col) => {
              if (col.key === "checkbox") {
                return (
                  <TableCell key={col.key} >
                    <CheckboxWithText />
                  </TableCell>
                );
              }
              if (col.key === "scheduleType") {
                return (
                  <TableCell key={col.key} className="h-[65px]">
                    <ScheduleType variant={scheduleTypeVariantMap[item.scheduleType]} size="sm">
                      {item.scheduleType}
                    </ScheduleType>
                  </TableCell>
                );
              }
              if (col.key === "status") {
                return (
                  <TableCell key={col.key} >
                    <Status variant={statusVariantMap[item.status]} size="sm">
                      {item.status}
                    </Status>
                  </TableCell>
                );
              }
              if (col.key === "action") {
                return (
                  <TableCell key={col.key}>
                    <div className="flex gap-1">
                      <div className="flex items-center justify-center bg-blue-50 rounded-md h-11 w-11">
                        <Eye className="text-blue-500" />
                      </div>
                      <div className="flex items-center justify-center bg-grey-50 rounded-md h-11 w-11 ">
                        <Ellipsis className="text-grey-900" />
                      </div>
                    </div>
                  </TableCell>
                );
              }
              return (
                <TableCell key={col.key} >
                  {item[col.key as keyof ScheduleData]}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
