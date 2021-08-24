// third parties:
import axios from "axios";

// react:
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useApi = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [remoteReadyFormData, setRemoteReadyFormData] = useState("");

  // POST:
  const sendFromData = async () => {
    const headers = {
      headers: {
        Authorization: "VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM",
        "Content-Type": "application/json",
      },
    };

    const data = {
      ...remoteReadyFormData,
    };

    await axios
      .post(
        `https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/data`,
        data,
        headers
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  };

  // GET:
  const getPdfLink = async () => {
    await axios
      .get(`https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/data`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  };

  return (
    <AppContext.Provider
      value={{ sendFromData, getPdfLink, setRemoteReadyFormData }}
    >
      {children}
    </AppContext.Provider>
  );
};
