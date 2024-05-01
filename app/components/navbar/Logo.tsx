"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <div className='object-fill w-36 h-14 '>
      <Image
        onClick={() => router.push("/")}
        alt='Logo'
        className='cursor-pointer object-cover'
        height={100}
        width={100}
        src='/images/logo.png'
      />
    </div>
  );
}

export default Logo;
