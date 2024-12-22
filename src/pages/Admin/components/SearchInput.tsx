import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  value,
  onChange,
}) => {
  return (
    <div className="w-9/12">
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        size="large"
        variant="outlined"
        onChange={onChange}
        className="search-input"
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

SearchInput.displayName = "SearchInput";
