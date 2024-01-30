import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import FilterGallery from "../src/components/FilterGallery";
import { useTranslation } from "next-i18next";

const Products = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet pageName={t("Navbar.links.products")} />

      <Layout>
        <LayoutTopWrapper title={t("Navbar.links.products")} />
        <main className="products">
          <FilterGallery />
        </main>
      </Layout>
    </>
  );
};

export default Products;

export async function getServerSideProps({ locale }) {
  const res = await fetch(
    API_URLS.HOME + "?lang=" + locale,
    API_URLS.HEADER_GET
  );
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
