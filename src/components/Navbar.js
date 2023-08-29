import { useTranslation } from "next-i18next";
import { API_URLS } from "../util/API_URL";
import { getApi } from "../util/getApi?n=nkl";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [data, setData] = useState("");
  const { t } = useTranslation();

  const gettingData = async () => {
    const fetchedData = await getApi(API_URLS.HOME, API_URLS.HEADER_GET);
    setData(fetchedData);
  };

  useEffect(() => {
    gettingData();
  }, []);

  return (
    <div className="navbar">
      <p>{t("React")}</p>
      <p>{data.message}</p>
    </div>
  );
}
