"use client";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";

const SettingForm = function () {
	return (
		<form>
			<div className="flex w-full  items-start gap-4">
				<RadioGroup label="Select your language :">
					<Radio value="buenos-aires">Buenos Aires</Radio>
					<Radio value="sydney">Sydney</Radio>
					<Radio value="san-francisco">San Francisco</Radio>
					<Radio value="london">London</Radio>
					<Radio value="tokyo">Tokyo</Radio>
				</RadioGroup>
				<Select
					label="Chose your perfer theme:"
					labelPlacement="outside"
					className="max-w-xs"
				>
					<SelectItem value="dark" key={"dark"}>
						Dark
					</SelectItem>
				</Select>
			</div>
		</form>
	);
};

export default SettingForm;
