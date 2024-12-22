import { CustomSelect } from "@/components/CustomSelect";
export const UserFilter = () => {
  return (
    <div className="flex justify-between items-center gap-4">
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
      <label htmlFor="status" className="font-semibold text-gray-700 text-sm">
        Status
      </label>
      <CustomSelect
        options={[
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ]}
        label="Status"
        onChange={() => {}}
      />
    </div>
  );
};
const RoleFilter = () => {
  return (
    <div>
      <label htmlFor="role">Role:</label>
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
      <label htmlFor="order" className="font-semibold text-gray-700 text-sm">
        Order
      </label>
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
      <label htmlFor="sortBy" className="font-semibold text-gray-700 text-sm">
        SortBy
      </label>
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
