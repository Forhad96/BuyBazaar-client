/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ReusableFormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "file"
    | "date"
    | "datetime-local"
    | "month"
    | "week"
    | "time"
    | "range"
    | "color"
    | "tel"
    | "url"
    | "search"
    | "hidden";
}

const ReusableFormInput: React.FC<ReusableFormFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </FormLabel>
        <FormControl>
          <Input
            type={type}
            className="focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder={placeholder}
            {...field}
          />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default ReusableFormInput;
