import Link from "next/link";
import { ChangeTheme } from "../../context/ThemeContext";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GavelIcon from "@mui/icons-material/Gavel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Links = ({ icons }) => {
  const router = useRouter();
  const { myPalette } = ChangeTheme();
  const { t } = useTranslation();

  const navbarLinks = [
    { href: "/", label: `${t("Navbar.links.home")}`, icon: <HomeIcon /> },
    { href: "/about", label: `${t("Navbar.links.about")}`, icon: <InfoIcon /> },
    {
      href: "/menu",
      label: `${t("Navbar.links.menu")}`,
      icon: <FastfoodIcon />,
    },
    {
      href: "/products",
      label: `${t("Navbar.links.products")}`,
      icon: <ShoppingBasketIcon />,
    },
    {
      href: "/terms",
      label: `${t("Navbar.links.terms")}`,
      icon: <GavelIcon />,
    },
    {
      href: "/contact",
      label: `${t("Navbar.links.contact")}`,
      icon: <ContactMailIcon />,
    },
  ];

  function isActiveLink(href) {
    return router.pathname === href || router.asPath === href; // Consider including route parameters if needed
  }

  return (
    <div className="links">
      {navbarLinks.map((link) => (
        <Link
          key={link.href}
          className={isActiveLink(link.href) ? "active" : ""}
          href={link.href}
          style={{ color: myPalette.text.primary }}
        >
          {icons && link.icon}
          {link.label}
        </Link>
      ))}

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
