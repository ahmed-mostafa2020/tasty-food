import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import lightLogo from "../../public/assets/images/lightLogo.png";
import darkLogo from "../../public/assets/images/darkLogo.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const Navbar = () => {
  const { myMode, myPalette } = ChangeTheme();
  const { t, i18n } = useTranslation();
  const { homeEndPointData } = FetchingAllEndPointsData();

  const data = homeEndPointData.data.brand;

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
          <Link href={"/"} style={{ color: myPalette.text.primary }}>
            {t("Home")}
          </Link>

          <Link href={"/about"} style={{ color: myPalette.text.primary }}>
            {t("About")} {""}
            {t("Us")}
          </Link>

          <Link href={"/terms"} style={{ color: myPalette.text.primary }}>
            {t("Terms")}
          </Link>

          <Link href={"/menu"} style={{ color: myPalette.text.primary }}>
            {t("Menu")}
          </Link>

          <Link href={"/products"} style={{ color: myPalette.text.primary }}>
            {t("Products")}
          </Link>

          {/* <Link href={"/checkout"} style={{ color: myPalette.text.primary }}>
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
          </Link> */}
        </div>

        <div className="call">
          <AddIcCallIcon
            className={`phone-icon ${i18n.language == "ar" && "right"}`}
          />
          <div className="text">
            <p>{t("Call us for Order ")}</p>
            <p>{data.mobile}</p>
          </div>
        </div>
      </Container>
      {/* <p>{data.message}</p> */}
    </div>
  );
};
export default Navbar;
