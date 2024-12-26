interface UserSearchAndFilterProps {
    handleSearchAndFilterChange: (name: string, value: string) => void;
  }


  type TUserSearchAndFilter ={
    name: string;
    value: string;
  }

  export type TSortConfiguration = {sortBy: string;sortOrder: "asc" | "desc";} | undefined;
