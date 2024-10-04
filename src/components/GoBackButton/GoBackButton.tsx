'use client';

import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import { ArrowUUpLeftIcon } from '@public/icons';

export const GoBackButton = function () {
  const router = useRouter();

  return (
    <Button
      isIconOnly
      className="mb-2"
      variant="bordered"
      onClick={() => router.back()}
    >
      <ArrowUUpLeftIcon className="h-7 w-7" />
    </Button>
  );
};
