"use client";

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

import useCountryInfo, {
  ICountry,
  JordanCityList,
} from "@/app/hooks/useCountry";
const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  category:
    | {
        label: string;
        icon: IconType;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
  const { countryInfo } = useCountryInfo();

  const coordinates = JordanCityList.find(
    (city) => city.state === locationValue
  )?.latlng;

  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-8'>
        <div className='text-xl font-semibold flex felx-row items-center gap-2'>
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className='flex flex-row items-center gap-4 gont-light text-neutral-500'>
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className='text-lg font-light text-neutral-500'>{description}</div>
      <hr />
      <Map center={coordinates || countryInfo?.latlng} />
    </div>
  );
};

export default ListingInfo;
function dataCountry() {
  throw new Error("Function not implemented.");
}
