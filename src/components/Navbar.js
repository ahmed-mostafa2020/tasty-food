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
    <div className="navbar">
      <Container fixed className="container">
        <Link href={"/"}>
          <Image
            className="logo"
            src={myMode == "light" ? lightLogo : darkLogo}
            alt="logo"
            width={110}
            height={60}
          />
        </Link>

        <div className="links">
          <Link
            href={"/"}
            style={{ color: myPalette.text.primary, fontWeight: "bold" }}
          >
            {t("Home")}
          </Link>

          <Link href={"/about"} style={{ color: myPalette.text.primary }}>
            {t("About")} {""}
            {t("Us")}
          </Link>

          <Link href={"/checkout"} style={{ color: myPalette.text.primary }}>
            {t("Checkout")}
          </Link>

          <Link href={"/orders"} style={{ color: myPalette.text.primary }}>
            {t("Orders")}
          </Link>

          <Link href={"/profile"} style={{ color: myPalette.text.primary }}>
            {t("Profile")}
          </Link>

          <Link href={"/register"} style={{ color: myPalette.text.primary }}>
            {t("Sign-up")}
          </Link>

          <Link
            href={"/verifyAccount"}
            style={{ color: myPalette.text.primary }}
          >
            {t("Verify-account")}
          </Link>

          <Link href={"/login"} style={{ color: myPalette.text.primary }}>
            {t("Login")}
          </Link>

          <Link
            href={"/forgetPassword"}
            style={{ color: myPalette.text.primary }}
          >
            {t("Forget-password")}
          </Link>

          <Link
            href={"/resetPassword"}
            style={{ color: myPalette.text.primary }}
          >
            {t("Reset-password")}
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
