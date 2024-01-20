import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import lightLogo from "../../public/assets/images/lightLogo.png";
import darkLogo from "../../public/assets/images/darkLogo.png";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const Footer = () => {
  const { myMode, myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const { t } = useTranslation();

  const data = homeEndPointData.data.brand;

  return (
    <footer className="footer">
      <Container fixed className="container">
        <Grid
          item
          container
          rowSpacing={5}
          columnSpacing={{ sm: 1, md: 2, lg: 3 }}
        >
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="column">
              <Link href={"/"}>
                <Image
                  className="logo"
                  src={myMode == "light" ? lightLogo : darkLogo}
                  alt="logo"
                  width={110}
                  height={60}
                />
              </Link>

              <div className="opening-hours">
                <h6> {t("Opening-hours")} </h6>

                <p style={{ color: myPalette.text.mainColor }}>
                  {data.working_hours}
                </p>
              </div>
            </div>
          </Grid>

          <Grid className="grid-box" item xs={12} sm={6} md={6} lg={3}>
            <div className="column">
              <h6>{t("Quick-links")}</h6>
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

                <Link
                  href={"/products"}
                  style={{ color: myPalette.text.primary }}
                >
                  {t("Products")}
                </Link>
              </div>
            </div>
          </Grid>

          <Grid className="grid-box" item xs={12} sm={6} md={6} lg={3}>
            <div className="column">
              <h6>{t("Our-menu")}</h6>
              <div className="links">
                <Link href={"/about"} style={{ color: myPalette.text.primary }}>
                  {t("Burgers")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Desserts")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Pizza")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Pasta")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Cold Drinks")}
                </Link>
              </div>
            </div>
          </Grid>

          <Grid className="grid-box" item xs={12} sm={6} md={6} lg={3}>
            <div className="column">
              <h6>{t("Get-in-touch")}</h6>

              <div className="get-in-touch">
                <div className="box">
                  <div className="icon-box">
                    <FmdGoodIcon className="icon" />
                  </div>

                  <p>{data.address}</p>
                </div>

                <div className="box">
                  <div className="icon-box">
                    <AddIcCallIcon className="icon" />
                  </div>

                  <p>{data.mobile}</p>
                </div>

                <div className="box">
                  <div className="icon-box">
                    <MailOutlineIcon className="icon" />
                  </div>

                  <p>{data.email}</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
