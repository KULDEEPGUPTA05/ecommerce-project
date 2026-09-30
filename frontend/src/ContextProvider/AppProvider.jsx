import { createContext } from "react"
import React from "react";
import { useState } from "react";
export const Store = createContext();
 const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [singledata, setSingledata] = useState({});

  return (
    <Store.Provider
      value={{ list, setList, search, setSearch, singledata, setSingledata }}
    >
      {children}
    </Store.Provider>
  );
};
export default AppProvider;

