import Head from "next/head";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import FormTopWrapper from "../src/atomicDesign/organisms/FormTopWrapper";

const Register = ({ data, formPage }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Tasty Food | Sign Up</title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <FormTopWrapper title={""}>
          <main
            className="register"
            style={{ textAlign: "center", paddingBottom: " 40px " }}
          >
            <Container fixed className="container">
              <form>
                <button type="submit">create account</button>
              </form>
            </Container>
          </main>
        </FormTopWrapper>
      </Layout>
    </>
  );
};

export default Register;

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
