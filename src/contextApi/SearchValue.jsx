import React from "react";
import { createContext, useState } from "react";
import { useContext } from "react";

export const createSearch = createContext();

export const useConsumeContext = () => {
 return useContext(createSearch);
};

const SearchValue = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <createSearch.Provider value={{ inputValue, setInputValue }}>
      {children}
    </createSearch.Provider>
  );
};

export default SearchValue;
