import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import lightLogo from "../../public/assets/images/lightLogo.png";
import darkLogo from "../../public/assets/images/darkLogo.png";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";
import { API_URLS } from "../util/API_URL";
import { getApi } from "../util/getApi";
import { useEffect, useState } from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Footer = () => {
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
  // console.log(data);

  useEffect(() => {
    fetchData();
  }, [i18n.language]);

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

                {data ? (
                  <p style={{ color: myPalette.text.mainColor }}>
                    {data.data.brand.working_hours}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Grid>

          <Grid className="grid-box" item xs={12} sm={6} md={6} lg={3}>
            <div className="column">
              <h6>{t("Quick-links")}</h6>
              <div className="links">
                <Link href={"/about"} style={{ color: myPalette.text.primary }}>
                  {t("About")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Menu")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Testimonial")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Blog")}
                </Link>

                <Link href={"/"} style={{ color: myPalette.text.primary }}>
                  {t("Contact")}
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

                  <p>{data && data.data.brand.address}</p>
                </div>

                <div className="box">
                  <div className="icon-box">
                    <AddIcCallIcon className="icon" />
                  </div>

                  <p> {data && data.data.brand.mobile}</p>
                </div>

                <div className="box">
                  <div className="icon-box">
                    <MailOutlineIcon className="icon" />
                  </div>

                  <p>{data && data.data.brand.email}</p>
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
