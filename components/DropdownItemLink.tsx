import { DropdownItem as NextUiDropdownItem } from "@nextui-org/dropdown";
import Link from "next/link";
import { ComponentProps } from "react";
type DropDownItemType = ComponentProps<typeof NextUiDropdownItem>;
const DropDownItemLink = ({
	key,
	startContent,
	href,
	children,
}: DropDownItemType) => {
	return (
		<NextUiDropdownItem
			key={key}
			startContent={startContent}
			href={href}
			as={Link}
		>
			{children}
		</NextUiDropdownItem>
	);
};
export default DropDownItemLink;
