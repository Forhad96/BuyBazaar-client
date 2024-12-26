import { useCallback, useState } from "react";
import { useGetAllUsersQuery } from "@/redux/features/admin/adminManagement.api";
import { UserTable } from "./components/UserTable";
import { SearchInput } from "./components/SearchInput";
import { UserFilter } from "./components/UserFilter";
import { ResetButton } from "./components/ResetButton";
import Container from "@/components/Shared/Container";
import { TQueryParam } from "@/types";
import { debounce } from "@/utils/debounce";
import { CustomPagination } from "@/components/CustomPagination";
import { TSortConfiguration } from "./types";

export function ManageUsers() {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<TSortConfiguration>();

  const {
    data: usersData,
    isLoading,
    isError,
  } = useGetAllUsersQuery([
    { name: "page", value: page },
    { name: "limit", value: 3 },
    ...params,
  ]);

  const updateParams = (name: string, value?: string) => {
    setParams((prev) =>
      value
        ? [...prev.filter((param) => param.name !== name), { name, value }]
        : prev.filter((param) => param.name !== name)
    );
  };

  const debouncedSearchTerm = useCallback(
    debounce((value: string) => updateParams("searchTerm", value), 500),
    []
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      debouncedSearchTerm(value);
    },
    [debouncedSearchTerm]
  );

  const handleFilterChange = useCallback(
    (name: string, value: string) => updateParams(name, value),
    []
  );

  const handleReset = useCallback(() => {
    setSearchTerm("");
    setParams([]);
  }, []);

  return (
    <Container className="space-y-4">
      <div className="flex justify-between">
        <SearchInput
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ResetButton onReset={handleReset} />
      </div>
      <UserFilter handleFilterChange={handleFilterChange} />
      <UserTable
        users={usersData?.data}
        isLoading={isLoading}
        isError={isError}
        setSortConfig={setSortConfig}
      />
      <CustomPagination
        totalPageCount={usersData?.meta?.total}
        activePage={usersData?.meta?.page}
        onPageSelect={setPage}
      />
    </Container>
  );
}

ManageUsers.displayName = "ManageUsers";
