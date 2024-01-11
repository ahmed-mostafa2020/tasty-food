import { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { API_URLS } from "../util/API_URL";
import { getApi } from "../util/getApi?n=nklj";

const DataContext = createContext();

// Func will be called to fetch any data from passed values by construction
export const FetchingAllEndPointsData = () => {
  return useContext(DataContext);
};

const DataContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const [homeEndPointData, setHomeEndPointData] = useState("");

  const fetchHomeEndPointData = async () => {
    const fetchedData = await getApi(
      API_URLS.HOME,
      API_URLS.HEADER_GET,
      i18n.language
    );
    setHomeEndPointData(fetchedData);
  };

  useEffect(() => {
    fetchHomeEndPointData();
  }, [i18n.language]);

  return (
    <DataContext.Provider
      // Values provider will provide
      value={{ homeEndPointData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
