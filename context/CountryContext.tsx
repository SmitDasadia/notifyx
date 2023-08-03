import React, { createContext, useContext, useState } from "react";

interface CountryContextData {
  selectedCountry: string;
  setSelectedCountry: (countryCode: string) => void;
}

const CountryContext = createContext<CountryContextData>({
  selectedCountry: "in",
  setSelectedCountry: () => {},
});

export const useCountryContext = () => useContext(CountryContext);

interface CountryProviderProps {
  children: React.ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("in");

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
