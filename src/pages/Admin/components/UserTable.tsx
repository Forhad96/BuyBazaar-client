import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TUserResponseData } from "@/types";
import { Edit2, Trash2 } from "lucide-react";
import { FC } from "react";

import { TSortConfiguration } from "../types";
type UserTableProps = {
  users: TUserResponseData[];
  isLoading?: boolean;
  isError?: boolean;
  setSortConfig: React.Dispatch<React.SetStateAction<TSortConfiguration>>;
};

export const UserTable: FC<UserTableProps> = ({
  users,
  isLoading,
  isError,
  sortConfig,
  setSortConfig,
}) => {
  const handleSort = (sortBy: string, sortOrder: "asc" | "desc") => {
    setSortConfig({ sortBy, sortOrder });
    console.log(sortBy, sortOrder);
  };
  return (
    <Table>
      <UserTableHeader handleSort={handleSort} sortConfig={sortConfig} />
      <UserTableBody users={users} />
    </Table>
  );
};

const UserTableHeader = ({
  handleSort,
  sortConfig,
}: {
  handleSort?: (sortBy: string, sortOrder: "asc" | "desc") => void;
  sortConfig?: { key: string; direction: "asc" | "desc" };
}) => {
  // const sortConfig = { key: "id", direction: "asc" };
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">
          <Button
            variant="ghost"
            onClick={() => handleSort && handleSort("_id", "desc")}
          >
            ID
            {sortConfig?.key === "id" &&
              (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </Button>
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            // onClick={() => handleSort && handleSort("name")}
          >
            Name
            {sortConfig?.key === "name" &&
              (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </Button>
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            // onClick={() => handleSort && handleSort("email")}
          >
            Email
            {sortConfig?.key === "email" &&
              (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </Button>
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            // onClick={() => handleSort && handleSort("role")}
          >
            Role
            {sortConfig?.key === "role" &&
              (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </Button>
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            // onClick={() => handleSort && handleSort("status")}
          >
            Status
            {sortConfig?.key === "status" &&
              (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </Button>
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            // onClick={() => handleSort && handleSort("joinDate")}
          >
            Join Date
            {sortConfig?.key === "joinDate" &&
              (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </Button>
        </TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};

const UserTableBody = ({ users }: { users: TUserResponseData[] }) => {
  return (
    <TableBody>
      {users?.map((user) => (
        <TableRow key={user.id}>
          <TableCell className="font-medium">{user.id.slice(-8)}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>{user.status}</TableCell>
          <TableCell>{user.createdAt.toString()}</TableCell>
          <TableCell>
            <Button variant="ghost">
              <Edit2 className="mr-2 h-4 w-4" />
            </Button>
            <Button variant="ghost">
              <Trash2 className="mr-2 h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

UserTable.displayName = "UserTable";
UserTableBody.displayName = "UserTableBody";
