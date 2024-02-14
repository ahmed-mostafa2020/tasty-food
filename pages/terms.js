import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import { useTranslation } from "next-i18next";

const Terms = ({ data }) => {
  const { t } = useTranslation();

  const allData = data.data;
  const terms = allData.terms;
  const brand = allData.brand;

  return (
    <>
      <Helmet brand={brand} pageName={t("Navbar.links.terms")} />

      <Layout>
        <LayoutTopWrapper title={terms.title} />
        <main>
          <Container fixed sx={{ paddingBlock: "30px" }}>
            <div dangerouslySetInnerHTML={{ __html: terms.content }} />
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default Terms;

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
