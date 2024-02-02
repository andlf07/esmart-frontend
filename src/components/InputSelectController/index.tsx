import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "..";

interface Props {
  control: any;
  name: string;
  children: React.ReactNode;
  label: string;
}

const InputSelectController: React.FC<Props> = ({
  control,
  name,
  children,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          placeholder={label}
          value={value}
          onChange={onChange}
          error={!!error}
          select
        >
          {children}
        </Input>
      )}
    />
  );
};

export default InputSelectController;
