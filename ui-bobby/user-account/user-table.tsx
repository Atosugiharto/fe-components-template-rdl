import { users } from "../types/user-data";
import LoaderData from "@/components/ui/loader-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EditedUser from "./edited-user";
import DeleteUser from "./delete-user";
import ViewUser from "./view-user";
import { Switch } from "@/components/ui/switch";
import PaginationWrapper from "@/components/ui/pagination-wrapper";
import { useState } from "react";

export default function UserTable() {
    
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const totalRows = users.length;
    const paginatedData = users.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      <Table className="text-sm rounded-t-lg overflow-hidden">
      <TableHeader className="bg-neutral-3 font-sans">
        <TableRow className="border-b border-neutral-1">
          <TableHead className="w-[107px]">Status</TableHead>
          <TableHead className="w-1/5">Name</TableHead>
          <TableHead className="w-1/5">Email</TableHead>
          <TableHead className="w-1/5">Department</TableHead>
          <TableHead className="w-1/5">Position</TableHead>
          <TableHead className="w-1/5">Role</TableHead>
          <TableHead className="text-center px-6 py-3 whitespace-nowrap">Action</TableHead>
        </TableRow>
      </TableHeader>
        <TableBody>
            {paginatedData  .map((user, idx) => (
              <TableRow key={idx} className="border-b border-gray-100">
                  <TableCell className="flex items-center gap-2">
                    <Switch checked={user.status} />
                      {user.status ? "Active" : "Inactive"}
                  </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="flex gap-2 items-center justify-center">
                    <ViewUser user={user} />
                    <EditedUser user={user} />
                    <DeleteUser user={user} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <LoaderData data={users} loading={false} colCount={1} rowCount={5} />

      <PaginationWrapper 
          totalRows={totalRows}
          defaultRowsPerPage={10}
          onPageChange={setPage}
          onRowsPerPageChange={(rows) => {
          setRowsPerPage(rows);
          setPage(1);
          }}
      />
    </>
  );
}