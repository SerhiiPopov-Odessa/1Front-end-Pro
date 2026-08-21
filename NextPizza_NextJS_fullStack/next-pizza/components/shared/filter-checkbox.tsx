import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

export interface FilterCheckboxProps {
  className?: string;
  text: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
  children?: React.ReactNode
}

export function FilterCheckbox({
  text,
  value,
  children,
  onCheckedChange,
  checked,
  name,
  className,
}: FilterCheckboxProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {children}
    </div>
  );
}

