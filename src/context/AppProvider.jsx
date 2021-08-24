// third parties:
import axios from "axios";

// react:
import { createContext, useContext } from "react";

const AppContext = createContext();
export const useApi = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // add POST

  // GET:
  const getPdfLink = async () => {
    await axios
      .get(``)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  };

  return (
    <AppContext.Provider value={{ getPdfLink }}>{children}</AppContext.Provider>
  );
};
