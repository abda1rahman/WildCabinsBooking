"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center object-fill h-full w-full md:w-36 md:h-14'>
      <Image
        onClick={() => router.push("/")}
        alt='Logo'
        className='logo-container cursor-pointer object-cover hover:transition-all hover:duration-150 hover:scale-110 md:hover:opacity-80'
        height={100}
        width={100}
        src='/images/logo.png'
      />
    </div>
  );
}

export default Logo;
