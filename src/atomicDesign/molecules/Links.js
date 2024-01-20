import Link from "next/link";
import { ChangeTheme } from "../../context/ThemeContext";
import { useTranslation } from "next-i18next";
//Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GavelIcon from "@mui/icons-material/Gavel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Links = ({ icons }) => {
  const { myPalette } = ChangeTheme();
  const { t } = useTranslation();

  return (
    <div className="links">
      <Link href={"/"} style={{ color: myPalette.text.primary }}>
        {icons && <HomeIcon />}
        {t("Home")}
      </Link>

      <Link href={"/about"} style={{ color: myPalette.text.primary }}>
        {icons && <InfoIcon />}
        {t("About")} {""}
        {t("Us")}
      </Link>

      <Link href={"/terms"} style={{ color: myPalette.text.primary }}>
        {icons && <GavelIcon />}

        {t("Terms")}
      </Link>

      <Link href={"/menu"} style={{ color: myPalette.text.primary }}>
        {icons && <FastfoodIcon />}

        {t("Menu")}
      </Link>

      <Link href={"/products"} style={{ color: myPalette.text.primary }}>
        {icons && <ShoppingBasketIcon />}

        {t("Products")}
      </Link>

      <Link href={"/contactUs"} style={{ color: myPalette.text.primary }}>
        {icons && <ContactMailIcon />}

        {t("Contact Us")}
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
  );
};

export default Links;
