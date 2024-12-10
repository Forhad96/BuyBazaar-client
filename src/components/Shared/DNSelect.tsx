import { Select } from "antd";

const DNSelect = () => {
    return (
      <Select
        // defaultValue="lucy"
        placeholder="Sort By"
        style={{ width: 120 }}
        // onChange={handleChange}
        options={[
          { value: "high", label: "Price Form Lower to higher" },
          { value: "lower", label: "Price Form higher to Lower " },
        ]}
      />
    );
};
export default DNSelect;