import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Components
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import AboutUs from "../src/components/AboutUs";
import Video from "../src/components/Video";
import Feedback from "../src/components/Feedback";
import Delivery from "../src/components/Delivery";
import Gallery from "../src/components/Gallery";

const About = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet pageName={t("Navbar.links.about")} />

      <Layout>
        <LayoutTopWrapper title={t("Navbar.links.about")} />
        <main className="about">
          <AboutUs />

          <Video />

          <Feedback background={false} />

          <Delivery />

          <Gallery />
        </main>
      </Layout>
    </>
  );
};

export default About;

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
