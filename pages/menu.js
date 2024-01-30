import Helmet from "../src/atomicDesign/molecules/Helmet";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";

// Components
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import SectionCrown from "../src/atomicDesign/molecules/SectionCrown";
import Gallery from "../src/components/Gallery";
import Delivery from "../src/components/Delivery";

const Menu = ({ data }) => {
  const { t } = useTranslation();

  const allData = data.data;
  const allCategories = allData.category;
  const brand = allData.brand;
  const allGallery = allData.images;

  return (
    <>
      <Helmet brand={brand} pageName={t("Navbar.links.menu")} />

      <Layout>
        <LayoutTopWrapper title={t("Navbar.links.menu")} />
        <main className="menu">
          <Container fixed className="container">
            {allCategories.map((category, index) => {
              if (category.products.length > 0) {
                return (
                  <section key={index} className="category">
                    <SectionCrown title={category.name} />

                    <div className="productsContainer">
                      {category.products.map((product) => (
                        <div key={product.id} className="product">
                          <div className="productDetails">
                            <h4>{product.name}</h4>
                            <span></span>
                            <h5>{product.price}</h5>
                          </div>

                          <p>{product.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }
            })}
          </Container>

          <Delivery allData={allData} />

          <Gallery allGallery={allGallery} />
        </main>
      </Layout>
    </>
  );
};

export default Menu;

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
