import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { API_URLS } from "../util/API_URL";
import { getApi } from "../util/getApi";
import { ChangeTheme } from "../context/ThemeContext";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const CopyRights = () => {
  const [data, setData] = useState("");
  const { myMode, myPalette } = ChangeTheme();
  const { t, i18n } = useTranslation();

  const fetchData = async () => {
    const fetchedData = await getApi(
      API_URLS.HOME,
      API_URLS.HEADER_GET,
      i18n.language
    );
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, [i18n.language]);

  return (
    <section
      className="copyRights"
      style={{ background: `${myPalette.background.copy_rights}` }}
    >
      {data ? (
        <Container fixed className="container">
          <p className="rights">{data.data.brand.copy_rights}</p>

          <Link href={"/"} style={{ color: myPalette.text.primary }}>
            {data.data.terms_slug}
          </Link>
        </Container>
      ) : (
        ""
      )}
    </section>
  );
};

export default CopyRights;
