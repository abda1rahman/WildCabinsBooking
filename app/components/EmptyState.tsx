"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showRest?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing of your filters",
  showRest,
}) => {
  const router = useRouter();
  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Image className="mb-4" src='/images/not-found.png' height={100} width={100} alt='notfound' />
      <Heading title={title} subtitle={subtitle} center />
      <div className='w-48 mt-4'>
        {showRest && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
