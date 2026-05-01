import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import React from "react";

type FieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  multiline?: boolean;
};

export function Field<T extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  multiline = false,
}: FieldProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="space-y-1.5">
      <Label className="text-slate-400 text-sm font-medium">
        {label}
      </Label>

      {multiline ? (
        <Textarea
          {...field}
          value={field.value ?? ""}
          rows={5}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={error ? "border-red-500" : ""}
        />
      ) : (
        <Input
          {...field}
          type={type}
          value={field.value ?? ""}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={error ? "border-red-500" : "py-6"}
        />
      )}

      {error && (
        <p className="text-xs text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}