import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, Form } from "antd";

interface CommonCheckboxProps {
  name: string;
  label: string;
  disabled?: boolean | undefined;
}

const CommonCheckbox: React.FC<CommonCheckboxProps> = ({
  name,
  label,
  disabled = false, // Provide a default value for disabled
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : undefined}
          help={error ? error.message : null}
        >
          <Checkbox

            disabled={disabled}
            {...field}

          >{label}</Checkbox>
        </Form.Item>
      )}
    />
  );
};

export default CommonCheckbox;
