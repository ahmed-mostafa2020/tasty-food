import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import FilterGallery from "../src/components/FilterGallery";

const Products = ({ data }) => {
  // const terms = data.data.terms;

  return (
    <>
      <Helmet pageName={"Products"} />

      <Layout>
        <LayoutTopWrapper title={"Products"} />
        <main className="products">
          <FilterGallery />
        </main>
      </Layout>
    </>
  );
};

export default Products;

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
