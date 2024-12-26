import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CustomSelectProps {
  options: { value: string, label: string }[],
  placeholder?: string,
  label?: string,
  onChange: (value: string) => void,
  defaultValue?: string,
}

export function CustomSelect({ options, placeholder="Select on option", label, onChange, defaultValue }: CustomSelectProps) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

CustomSelect.displayName = "CustomSelect"
