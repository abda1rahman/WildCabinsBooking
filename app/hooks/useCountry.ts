import { useCallback, useEffect, useState } from "react";

export interface ICountry {
  value: string;
  label: string;
  flag: {
    png: string;
  };
  latlng: number[];
  region: string;
}

// This hook to get details Jordan country;
const useCountryInfo = (Country = "jordan") => {
  const [countryInfo, setCountryInfo] = useState<ICountry>();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${Country}`);
      const data = await res.json();

      if (!data || data.length === 0) {
        throw new Error("No data received from the API");
      }
      const countryInfo = data[0]; // Access the first country info object

      setCountryInfo({
        value: countryInfo?.cca2 || "",
        label: countryInfo?.name?.common || "",
        flag: countryInfo?.flags?.png || "",
        latlng: countryInfo?.latlng || [],
        region: countryInfo?.region || "",
      });
    } catch (error) {
      throw new Error(); // Rethrow the error to handle it in the component using this hook
    }
  }, [Country]);

  useEffect(() => {
    fetchData()
  }, [Country]);

  return { countryInfo };
};

export default useCountryInfo;

export const JordanCityList = [
  { id: 1, state: "Amman", latlng: [31.963158, 35.930359] },
  { id: 2, state: "Irbid", latlng: [32.555556, 35.85] },
  { id: 3, state: "Zarqa", latlng: [32.072222, 36.086944] },
  { id: 4, state: "Aqaba", latlng: [29.527778, 35.007778] },
  { id: 5, state: "Madaba", latlng: [31.718039, 35.793409] },
  { id: 6, state: "Jerash", latlng: [32.277778, 35.891944] },
  { id: 7, state: "Karak", latlng: [31.181111, 35.704722] },
  { id: 8, state: "Ma'an", latlng: [30.192222, 35.735556] },
  { id: 9, state: "Tafilah", latlng: [30.833333, 35.6] },
  { id: 10, state: "Mafraq", latlng: [32.35, 36.233333] },
  { id: 11, state: "Balqa", latlng: [32.034722, 35.723889] },
  { id: 12, state: "Ajloun", latlng: [32.333333, 35.752778] },
];
