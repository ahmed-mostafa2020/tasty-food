import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../src/layout/Layout";
import LayoutTopWrapper from "../../src/atomicDesign/organisms/LayoutTopWrapper";
import { Container } from "@mui/material";
import { useTranslation } from "next-i18next";
import { API_URLS } from "../../src/util/API_URL";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CategoryProducts = ({ data }) => {
  const router = useRouter();
  const categoryProducts = router.query.categoryProducts;
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Tasty Food | {categoryProducts} Products </title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <LayoutTopWrapper title={`${categoryProducts} Details`} />
        <main
          className="categoryProducts"
          style={{ textAlign: "center", padding: "40px 0" }}
        >
          <Container fixed className="container">
            <h1>Details about category : {categoryProducts}</h1>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default CategoryProducts;

export async function getServerSideProps({ locale, params }) {
  // const res = await fetch(
  //   `${API_URLS.HOME}/${params.categoryProducts}`,
  //   API_URLS.HEADER_GET
  // );
  // const data = await res.json();
  return {
    props: {
      // data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
