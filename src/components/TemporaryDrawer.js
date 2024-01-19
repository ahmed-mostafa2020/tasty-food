import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { ChangeTheme } from "../context/ThemeContext";
import lightLogo from "../../public/assets/images/lightLogo.png";
import darkLogo from "../../public/assets/images/darkLogo.png";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GavelIcon from "@mui/icons-material/Gavel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";

const TemporaryDrawer = () => {
  const { myMode, myPalette } = ChangeTheme();
  const { t, i18n } = useTranslation();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.brand;

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className={`sidebar ${myMode}`}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link href={"/"}>
        <figure>
          <Image
            className="logo"
            src={myMode == "light" ? lightLogo : darkLogo}
            alt="logo"
            width={90}
            height={60}
          />
        </figure>
      </Link>

      <div className="links">
        <Link href={"/"} style={{ color: myPalette.text.primary }}>
          <HomeIcon />
          {t("Home")}
        </Link>

        <Link href={"/about"} style={{ color: myPalette.text.primary }}>
          <InfoIcon />
          {t("About")} {""}
          {t("Us")}
        </Link>

        <Link href={"/terms"} style={{ color: myPalette.text.primary }}>
          <GavelIcon />
          {t("Terms")}
        </Link>

        <Link href={"/menu"} style={{ color: myPalette.text.primary }}>
          <FastfoodIcon />
          {t("Menu")}
        </Link>

        <Link href={"/products"} style={{ color: myPalette.text.primary }}>
          <ShoppingBasketIcon />
          {t("Products")}
        </Link>
      </div>

      <Divider />

      <div className="callBox">
        <div className="call">
          <AddIcCallIcon
            className={`phone-icon ${i18n.language == "ar" && "right"}`}
          />
          <div className="text">
            <p>{t("Call us for Order ")}</p>
            <p>{data.mobile}</p>
          </div>
        </div>

        <AtomicButton
          content={"Order Online"}
          href={"/"}
          bgColor={myPalette.background.mainColor}
          textColor={myPalette.text.light}
        />
      </div>
    </Box>
  );

  return (
    <div className="burgerIcon">
      {i18n.language == "en" ? (
        <>
          <Button onClick={toggleDrawer("left", true)} color="inherit">
            <MenuIcon />
          </Button>

          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("right")}
          </Drawer>
        </>
      ) : (
        <>
          <Button onClick={toggleDrawer("right", true)} color="inherit">
            <MenuIcon />
          </Button>

          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            sx={{ direction: "rtl" }}
          >
            {list("right")}
          </Drawer>
        </>
      )}
    </div>
  );
};

export default TemporaryDrawer;
