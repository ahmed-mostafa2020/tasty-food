import Head from "next/head";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import Link from "next/link";

const Profile = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Tasty Food | Profile</title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <LayoutTopWrapper title={t("Profile")} />
        <main
          className="profile"
          style={{ textAlign: "center", padding: "40px 0" }}
        >
          <Container fixed className="container">
            profile
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Profile;

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
