import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";

const Terms = ({ data }) => {
  const terms = data.data.terms;

  return (
    <>
      <Helmet pageName={"Terms"} />

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
