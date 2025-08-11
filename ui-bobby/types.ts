export interface ScheduleData {
  regNo: string;
  soNumber: string;
  companyId: string;
  companyName: string;
  marketingArea: string;
  serviceType: string;
  pic: string;
  scheduleAudit: string;
  totalPrice: string;
  transportation: string;
  accommodation: string;
  scheduleType: string;
  status: string;
};

export interface TableScheduleProps {
  data?: ScheduleData[];
}

