"use client";


import useCountryInfo, { ICountry, JordanCityList } from "@/app/hooks/useCountry";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Select from "react-select";

export type CountrySelectValue = {
  state: string;
  latlng: number[];
  id: number;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {

  // Get country jordan info
  const {countryInfo} = useCountryInfo()
  return (
    <div className='relative'>
      <Select
        placeholder={`\u00A0\u00A0\u00A0\u00A0\u00A0AnyWhere`}
        isClearable
        options={JordanCityList}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: CountrySelectValue) => (
          <div className='flex flex-row items-center gap-3 '>
            <div>{option.id}</div>
            <div>
              {option.state},
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2 pl-6",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe436",
          },
        })}
      />
      {/* Logo Jordan */}
      <div className='absolute bg-white top-[1.56rem] left-4 w-10 h-8'>
        {countryInfo?.flag && (
          <Image
            className='object-cover rounded-sm'
            src={`${countryInfo.flag}`}
            alt='logo'
            height={100}
            width={30}
          />
        )}
      </div>
    </div>
  );
};

export default CountrySelect;
