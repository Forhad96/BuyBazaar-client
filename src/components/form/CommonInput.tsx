import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type CommonInputProps = {
  type: string;
  name: string;
  label: string;
  placeHolder?:string;
  disabled?: boolean;
};

const CommonInput = ({ type, name, label,placeHolder, disabled }: CommonInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : ""}
          help={error ? error.message : null}
        >
          <Input
            type={type}
            id={name}
            {...field}
            placeholder={placeHolder}
            disabled={disabled}
            size="large"
          />
        </Form.Item>
      )}
    />
  );
};

export default CommonInput;
