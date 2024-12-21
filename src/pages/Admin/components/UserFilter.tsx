import { CustomSelect } from "@/components/CustomSelect";

export const UserFilter = () => {
  return (
    <div className="flex gap-4">
      <StatusFilter />
      <RoleFilter />
      <SortBy />
      <OrderBy />
    </div>
  );
};

const StatusFilter = () => {
  return (
    <div>
      <CustomSelect
        options={[
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ]}
        onChange={() => {}}
      />
    </div>
  );
};
const RoleFilter = () => {
  return (
    <div>
      <CustomSelect
        options={[
          { value: "admin", label: "Admin" },
          { value: "vendor", label: "Vendor" },
        ]}
        onChange={() => {}}
      />
    </div>
  );
};
const OrderBy = () => {
  return (
    <div>
      <CustomSelect
        options={[
          { value: "asc", label: "Ascending" },
          { value: "desc", label: "Descending" },
        ]}
        onChange={() => {}}
      />
    </div>
  );
};
const SortBy = () => {
  return (
    <div>
      <CustomSelect
        options={[
          { value: "name", label: "Name" },
          { value: "email", label: "Email" },
        ]}
        onChange={() => {}}
      />
    </div>
  );
};
