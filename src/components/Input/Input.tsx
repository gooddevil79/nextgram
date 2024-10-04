import React from 'react';
import { InputProps, Input as NextInput } from '@nextui-org/input';
export const Input = function ({
  type,
  label,
  labelPlacement,
  placeholder,
  variant,
}: InputProps) {
  return (
    <label className="">
      {label && <p>{label}</p>}
      <NextInput placeholder={placeholder} type={type} variant={variant} />
    </label>
  );
};
