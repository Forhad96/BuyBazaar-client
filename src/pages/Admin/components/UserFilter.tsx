
import { CustomSelect } from "@/components/CustomSelect";

interface UserSearchAndFilterProps {
  handleFilterChange: (name: string, value: string) => void;
}
export const UserFilter = ({ handleFilterChange }: UserSearchAndFilterProps) => {
  // const [filters, setFilters] = useState([
  //   { name: "status", value: "" },
  //   { name: "role", value: "" },
  //   { name: "sortBy", value: "" },
  //   { name: "order", value: "" },
  // ]);
// console.log(filters);
  // const handleFilterChange = (name: string, value: string) => {
  //   setFilters((prevFilters) =>
  //     prevFilters.map((filter) =>
  //       filter.name === name ? { ...filter, value } : filter
  //     )
  //   );
  // };

  return (
    <div className="flex  flex-wrap items-center gap-4">
      <StatusFilter onChange={handleFilterChange} />
      <RoleFilter onChange={handleFilterChange} />
      {/* <SortBy onChange={handleFilterChange} />
      <OrderBy onChange={handleFilterChange} /> */}
    </div>
  );
};

const StatusFilter = ({ onChange }: { onChange: (name: string, value: string) => void }) => {
  return (
    <div>
      <label htmlFor="status" className="font-semibold text-gray-700 text-sm">
        Status
      </label>
      <CustomSelect
        options={[
          { value: "ACTIVE", label: "Active" },
          { value: "SUSPENDED", label: "Suspended" },
          { value: "DELETED", label: "Deleted" },
        ]}
        label="Status"
        onChange={(value) => onChange("status", value)}
      />
    </div>
  );
};

const RoleFilter = ({ onChange }: { onChange: (name: string, value: string) => void }) => {
  return (
    <div>
      <label htmlFor="role">Role:</label>
      <CustomSelect
        options={[
          { value: "ADMIN", label: "Admin" },
          { value: "VENDOR", label: "Vendor" },
          { value: "CUSTOMER", label: "Customer" },
        ]}
        onChange={(value) => onChange("role", value)}
      />
    </div>
  );
};

const OrderBy = ({ onChange }: { onChange: (name: string, value: string) => void }) => {
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
        onChange={(value) => onChange("createdAt", value)}
      />
    </div>
  );
};

const SortBy = ({ onChange }: { onChange: (name: string, value: string) => void }) => {
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
        onChange={(value) => onChange("sortBy", value)}
      />
    </div>
  );
};
