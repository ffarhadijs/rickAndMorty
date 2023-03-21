import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

interface seacrhParams {
  searchParams: URLSearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<any>>;
}

export const SearchParams = createContext({} as seacrhParams);
const SearchParamsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  return (
    <SearchParams.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </SearchParams.Provider>
  );
};

export default SearchParamsContextProvider;
