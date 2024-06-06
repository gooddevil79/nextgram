import React from "react";
import { InputProps, Input as NextInput } from "@nextui-org/input";
const Input = function ({
	type,
	label,
	labelPlacement,
	placeholder,
	variant,
}: InputProps) {
	return (
		<label className="">
			{label && <p>{label}</p>}
			<NextInput type={type} variant={variant} placeholder={placeholder} />
		</label>
	);
};

export default Input;
