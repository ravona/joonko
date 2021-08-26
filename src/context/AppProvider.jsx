// third parties:
import axios from "axios";

// react:
import { createContext, useContext, useState, useEffect } from "react";

import API_CONFIG from "../api/config";

const AppContext = createContext();
export const useApi = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [remoteReadyFormData, setRemoteReadyFormData] = useState({});

  const onSubmitForm = async () => {
    const headers = {
      headers: {
        "x-api-key": API_CONFIG.KEY,
        "Content-Type": "application/json",
      },
    };

    const data = {
      name: remoteReadyFormData.name,
      company_name: remoteReadyFormData.companyName,
      email: remoteReadyFormData.email,
      phone: remoteReadyFormData.phone,
    };

    try {
      const res = await axios.post(`${API_CONFIG.URL}/data`, data, headers);
      const file = await axios.get(
        `${API_CONFIG.URL}/file`,
        { params: res.data },
        headers
      );

      if (file.status === 404) {
        window.location.href = "http://www.joonko.co";
      } else if (file.status === 200) {
        window.location.href = file.data.link;
      }

      return file;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  useEffect(() => {
    if (Object.keys(remoteReadyFormData).length) {
      onSubmitForm();
    }
  }, [remoteReadyFormData]);

  return (
    <AppContext.Provider value={{ onSubmitForm, setRemoteReadyFormData }}>
      {children}
    </AppContext.Provider>
  );
};
