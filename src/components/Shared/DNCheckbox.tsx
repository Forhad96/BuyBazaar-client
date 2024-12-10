import { Checkbox, GetProp } from "antd";
type TDNCheckboxProp = {
    options:string[]
}
const DNCheckbox: React.FC<TDNCheckboxProp> = ({ options}) => {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  // const plainOptions = ["sedan", "SUV", "truck", "van", "coupe", "electric"];

  return (
    <>
      <Checkbox.Group
        options={options}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
    </>
  );
};
export default DNCheckbox