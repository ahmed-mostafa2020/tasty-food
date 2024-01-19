import Head from "next/head";
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

const Custom404 = ({ data }) => {
  const { myMode, myPalette } = ChangeTheme();

  return (
    <>
      <Head>
        <title>Tasty Food | 404</title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

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
              <h6>Oops! I think we just lost something.</h6>

              <p>
                Much as we would love to serve it up to you, we’d suggest you go
                back and try a different link.
              </p>

              <AtomicButton
                content={"Go Back To Home Page"}
                href={"/"}
                bgColor={myPalette.background.mainColor}
                borderColor={myPalette.text.mainColor}
                textColor={myPalette.divider.primary}
              />
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
