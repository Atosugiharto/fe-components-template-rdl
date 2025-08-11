import { useSearchParams } from "react-router";
import { useUsers } from "../api/get-users";

export default function UserTable() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useUsers({
    params: { page: +(searchParams.get('page') || 1), limit: +(searchParams.get('limit') || 10) }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <table className="border border-separate">
      <thead>
        <tr>
          <th className="border">Email</th>
          <th className="border">Full Name</th>
          <th className="border">Role Name</th>
        </tr>
      </thead>
      <tbody>
        {data?.data.map(user => (
          <tr key={user.id}>
            <td className="border">{user.email}</td>
            <td className="border">{user.fullname}</td>
            <td className="border">{user.roleName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}