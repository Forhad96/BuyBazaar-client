import { useCallback, useState } from "react";
import { useGetAllUsersQuery } from "@/redux/features/admin/adminManagement.api";
import { UserTable } from "./components/UserTable";
import { SearchInput } from "./components/SearchInput";
import { UserFilter } from "./components/UserFilter";
import { ResetButton } from "./components/ResetButton";
import Container from "@/components/Shared/Container";
import { TQueryParam } from "@/types";
import { debounce } from "@/utils/debounce";

export function ManageUsers() {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: usersData,
    isLoading,
    isError,
  } = useGetAllUsersQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const debouncedSearchTerm = useCallback(
    debounce((searchTerm: string) => {
      setParams([{ name: "searchTerm", value: searchTerm }]);
    }, 500),
    [] // Empty array ensures that effect is only run on mount and unmount
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // setParams([{ name: "searchTerm", value: e.target.value }]);
    debouncedSearchTerm(e.target.value);
  };

  return (
    <Container className="space-y-4">
      <div className="flex justify-between">
        <SearchInput
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ResetButton onReset={() => setSearchTerm("")} />
      </div>
      <UserFilter />
      <UserTable
        users={usersData?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
}
