import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import Image from "next/image";
import errorImage from "../public/assets/images/404.png";
import errorImageDark from "../public/assets/images/404dark.png";
import chiliImage from "../public/assets/images/red_chili 1.png";
import chiliImageDark from "../public/assets/images/red_chiliDark.png";
import { ChangeTheme } from "../src/context/ThemeContext";
import AtomicButton from "../src/atomicDesign/atoms/AtomicButton";
import { useTranslation } from "next-i18next";

const Custom404 = ({ data }) => {
  const { myMode, myPalette } = ChangeTheme();
  const { t } = useTranslation();

  return (
    <>
      <Helmet pageName={t("404.name")} />

      <Layout>
        <LayoutTopWrapper />
        <main className="errorPage">
          <Container fixed className="container">
            <Image
              src={myMode === "light" ? errorImage : errorImageDark}
              alt="404"
              width={400}
              height={200}
            />

            <Image
              className="chiliImage"
              src={myMode === "light" ? chiliImage : chiliImageDark}
              alt="chiliImage"
              width={350}
              height={170}
            />
            <div className="text">
              <h6>{t("404.title")}</h6>

              <p>{t("404.description")}</p>

              <div className="buttonBox">
                <AtomicButton
                  content={t("Buttons.back_to_home")}
                  href={"/"}
                  bgColor={myPalette.background.mainColor}
                  textColor={myPalette.text.light}
                />
              </div>
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Custom404;

export async function getStaticProps({ locale }) {
  const res = await fetch(API_URLS.HOME, API_URLS.HEADER_GET);
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
