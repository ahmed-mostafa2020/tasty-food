import Head from "next/head";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";

const ResetPassword = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Tasty Food | Reset Password</title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <LayoutTopWrapper title={t("Reset-password")} />
        <main
          className="resetPassword"
          style={{ textAlign: "center", padding: "40px 0" }}
        >
          <Container fixed className="container">
            resetPassword
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default ResetPassword;

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
