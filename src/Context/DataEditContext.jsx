import axios from "axios";
import { createContext, useState } from "react";

const DataEditContext = createContext();

// http://127.0.0.1:8000/hat-api/Hero_Details/14535e8c-8452-44f8-82bb-e1af20e3594e/

export function DataEditProvider({ children }) {
  const [herosectEdit, setHero] = useState([]);
  const id = "";

  //   async function getHeroSect() {
  //     const { data } = await axios.put(
  //       `http://127.0.0.1:8000/hat-api/Hero_Details/${id}`
  //     );
  //   }

  return (
    <DataEditContext.Provider value={{}}>{children}</DataEditContext.Provider>
  );
}

export default DataEditContext;
