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
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import Links from "../atomicDesign/molecules/Links";
import SocialMedia from "../atomicDesign/molecules/SocialMedia";

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

      <Links icons={true} />

      <Divider />

      <div className="callBox">
        <SocialMedia />

        <div className="call">
          <PhoneInTalkOutlinedIcon
            className={`phone-icon ${i18n.language == "ar" && "right"}`}
          />

          <div className="text">
            <p>{t("Navbar.call_us")}</p>
            <p>{data.mobile}</p>
          </div>
        </div>

        <AtomicButton
          content={t("Buttons.order_online")}
          href={`${data.elmenus_url}`}
          bgColor={myPalette.background.mainColor}
          textColor={myPalette.text.light}
          shadowColor={myPalette.shadowColor.red}
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
            {list("left")}
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
