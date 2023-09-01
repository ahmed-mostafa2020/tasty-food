import { API_URLS } from "../util/API_URL";
import { getApi } from "../util/getApi?n=nklj";
import { useEffect, useState } from "react";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import lightLogo from "../../public/assets/images/lightLogo.png";
import darkLogo from "../../public/assets/images/darkLogo.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const Navbar = () => {
  const [data, setData] = useState("");
  const { myMode, myPalette } = ChangeTheme();
  const { t, i18n } = useTranslation();

  const gettingData = async () => {
    const fetchedData = await getApi(
      API_URLS.HOME,
      API_URLS.HEADER_GET,
      i18n.language
    );
    setData(fetchedData);
  };
  console.log();

  useEffect(() => {
    gettingData();
  }, [i18n.language]);

  return (
    <div className="navbar">
      <Container fixed className="container">
        <Link href={"./"}>
          <Image
            className="logo"
            src={myMode == "light" ? lightLogo : darkLogo}
            alt="logo"
            width={110}
            height={60}
          />
        </Link>

        <div className="links">
          <Link href={"./"} style={{ color: myPalette.text.primary }}>
            {t("Home")}
          </Link>

          <Link href={"./about"} style={{ color: myPalette.text.primary }}>
            {t("About")}
          </Link>
        </div>

        <div className="call flex-jc">
          <AddIcCallIcon
            className={`phone-icon ${i18n.language == "ar" && "right"}`}
          />
          <div className="text">
            <p>{t("Call")}</p>
            <p>+1-555-157-5651</p>
          </div>
        </div>
      </Container>
      {/* <p>{data.message}</p> */}
    </div>
  );
};
export default Navbar;
