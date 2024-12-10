import { DatePicker, Form } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  disabled?:boolean;
};

const DNDatePicker = ({ name, label,disabled }: TDatePickerProps) => {
  // Function to disable all previous dates
  const disabledDate = (current: Dayjs) => {
    // Can not select days before today
    return current && current < dayjs().startOf("day");
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              size="large"
              disabled={disabled}
              disabledDate={disabledDate}
              style={{ width: "100%" }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default DNDatePicker;
