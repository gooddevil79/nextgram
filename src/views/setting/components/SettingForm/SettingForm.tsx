'use client';

import { RadioGroup, Radio } from '@nextui-org/radio';

import { ThemeSwitch } from '@/components';

export const SettingForm = function () {
  return (
    <form>
      <div className="flex w-full items-start gap-4">
        <RadioGroup label="Select your language :">
          <Radio value="buenos-aires">Buenos Aires</Radio>
          <Radio value="sydney">Sydney</Radio>
          <Radio value="san-francisco">San Francisco</Radio>
          <Radio value="london">London</Radio>
          <Radio value="tokyo">Tokyo</Radio>
        </RadioGroup>
        {/* <Select
					label="Chose your prefer theme:"
					labelPlacement="outside"
					className="max-w-xs"
				>
					<SelectItem value="dark" key={"dark"}>
						Dark
					</SelectItem>
				</Select> */}
        {/* <label className="flex gap-5 text-slate-500"> */}
        <h1>Change theme : </h1>
        <ThemeSwitch />
        {/* </label>/ */}
      </div>
    </form>
  );
};
