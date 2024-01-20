import Head from "next/head";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import AboutUs from "../src/components/AboutUs";
import Video from "../src/components/Video";

const About = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Tasty Food | {t("About")}</title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <LayoutTopWrapper title={t("About")} subTitle={t("Us")} />
        <main
          className="about"
          // style={{ textAlign: "center", padding: "40px 0" }}
        >
          <AboutUs container={true} />

          <Video />
        </main>
      </Layout>
    </>
  );
};

export default About;

export async function getServerSideProps({ locale }) {
  const res = await fetch(API_URLS.HOME, API_URLS.HEADER_GET);
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
