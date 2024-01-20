import Head from "next/head";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";

const Terms = ({ data }) => {
  const { t } = useTranslation();
  const terms = data.data.terms;

  return (
    <>
      <Head>
        <title>Tasty Food | {t("Terms")}</title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <LayoutTopWrapper title={terms.title} />
        <main className="terms">
          <Container fixed className="container">
            <div dangerouslySetInnerHTML={{ __html: terms.content }} />
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Terms;

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
