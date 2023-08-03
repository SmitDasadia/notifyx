import React, { ChangeEvent } from "react";
import { useCountryContext } from "@/context/CountryContext";
import { countries } from "./CountryList";

const SelectCountry: React.FC = () => {
  const { selectedCountry, setSelectedCountry } = useCountryContext();

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      
      <select
        id="selectCountry"
        className="border border-gray-300 rounded-md px-4 py-2 bg-slate-900"
        onChange={handleCountryChange}
        value={selectedCountry}
      >
        {countries.map((country: any) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
