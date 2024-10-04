import { DropdownItem as NextUiDropdownItem } from '@nextui-org/dropdown';
import Link from 'next/link';
import { ComponentProps } from 'react';
type DropDownItemType = ComponentProps<typeof NextUiDropdownItem>;
export const DropDownItemLink = ({
  key,
  startContent,
  href,
  children,
}: DropDownItemType) => {
  return (
    <NextUiDropdownItem
      key={key}
      as={Link}
      href={href}
      startContent={startContent}
    >
      {children}
    </NextUiDropdownItem>
  );
};
