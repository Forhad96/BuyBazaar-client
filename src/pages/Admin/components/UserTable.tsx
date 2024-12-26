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
import { AlertCircle, ArrowDown, ArrowUp, Edit2, Trash2, UserX } from "lucide-react";
import { FC, useState } from "react";

import { TSortConfiguration } from "../types";
import { CustomSelect } from "@/components/CustomSelect";
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
  setSortConfig,
}) => {
  const handleSort = (sortBy: string, sortOrder: "asc" | "desc") => {
    setSortConfig({ sortBy, sortOrder });
  };

  if (isLoading) return <SkeletonTable />;

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <AlertCircle className="text-red-500 text-6xl mb-4" />
        <p className="text-lg font-semibold text-gray-800">Error Loading Users</p>
        <p className="text-sm text-gray-600">
          Something went wrong. Please refresh the page or try again later.
        </p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <UserX className="text-gray-400 text-6xl mb-4" />
        <p className="text-lg font-semibold text-gray-800">No Users Found</p>
        <p className="text-sm text-gray-600">
          There are no users to display at the moment.
        </p>
      </div>
    );
  }

  return (
    <Table>
      <UserTableHeader handleSort={handleSort} />
      <UserTableBody users={users} />
    </Table>
  );
};

const UserTableHeader = ({
  handleSort,
}: {
  handleSort?: (sortBy: string, sortOrder: "asc" | "desc") => void;
}) => {
  const [currentSort, setCurrentSort] = useState<{
    field: string;
    order: "asc" | "desc";
  }>({
    field: "",
    order: "asc",
  });

  const handleClick = (sortBy: string) => {
    const sortOrder =
      currentSort.field === sortBy && currentSort.order === "asc"
        ? "desc"
        : "asc";
    setCurrentSort({ field: sortBy, order: sortOrder });
    handleSort && handleSort(sortBy, sortOrder);
  };

  const renderSortIcon = (field: string) => {
    if (currentSort.field === field) {
      return currentSort.order === "asc" ? (
        <ArrowUp size={16} />
      ) : (
        <ArrowDown size={16} />
      );
    }
    return null;
  };

  return (
    <TableHeader>
      <TableRow>
        <TableHead
          onClick={() => handleClick("_id")}
          className="cursor-pointer hover:bg-gray-100 flex items-center gap-2"
        >
          ID {renderSortIcon("_id")}
        </TableHead>
        <TableHead
          onClick={() => handleClick("name")}
          className="cursor-pointer hover:bg-gray-100"
        >
          Name {renderSortIcon("name")}
        </TableHead>
        <TableHead
          onClick={() => handleClick("email")}
          className="cursor-pointer hover:bg-gray-100"
        >
          Email {renderSortIcon("email")}
        </TableHead>
        <TableHead
          onClick={() => handleClick("role")}
          className="cursor-pointer hover:bg-gray-100"
        >
          Role {renderSortIcon("role")}
        </TableHead>
        <TableHead
          onClick={() => handleClick("status")}
          className="cursor-pointer hover:bg-gray-100"
        >
          Status {renderSortIcon("status")}
        </TableHead>
        <TableHead
          onClick={() => handleClick("join_date")}
          className="cursor-pointer hover:bg-gray-100"
        >
          Join Date {renderSortIcon("join_date")}
        </TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default UserTableHeader;

const UserTableBody = ({ users }: { users: TUserResponseData[] }) => {
  const updateUser = async (id: string, data: Partial<TUserResponseData>) => {
    console.log(id, data);
  };

  return (
    <TableBody>
      {users?.map((user) => (
        <TableRow key={user.id}>
          <TableCell className="font-medium">{user.id.slice(-8)}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>
            <CustomSelect
              defaultValue={user.status}
              options={[
                { value: "ACTIVE", label: "Active" },
                { value: "Inactive", label: "Inactive" },
                { value: "Blocked", label: "Blocked" },
              ]}
              onChange={(value) => updateUser(user.id, { status: value })}
            />
          </TableCell>
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


const SkeletonTable = () => {
  const columns = [
    { field: "id", label: "ID", width: "w-16" },
    { field: "name", label: "Name", width: "w-32" },
    { field: "email", label: "Email", width: "w-48" },
    { field: "role", label: "Role", width: "w-24" },
    { field: "status", label: "Status", width: "w-20" },
    { field: "joinDate", label: "Join Date", width: "w-28" },
    { field: "actions", label: "Actions", width: "w-16 h-8" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.field}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>
                <div
                  className={`h-4 ${column.width} rounded bg-gray-200 animate-pulse`}
                ></div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
