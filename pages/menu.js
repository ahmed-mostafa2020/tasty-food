import Head from "next/head";
import Layout from "../src/layout/Layout";
import { API_URLS } from "../src/util/API_URL";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@mui/material";
import LayoutTopWrapper from "../src/atomicDesign/organisms/LayoutTopWrapper";
import SectionTitle from "../src/atomicDesign/atoms/SectionTitle";
import Gallery from "../src/components/Gallery";
import Delivery from "../src/components/Delivery";

const Menu = ({ data }) => {
  const { t } = useTranslation();
  const allCategories = data.data.category;
  console.log(allCategories);

  // const allMenuItems = [
  //   {
  //     name: "Burger",
  //     subItems: [
  //       {
  //         name: "Cheese Burger",
  //         price: "30EGP",
  //         description:
  //           "In justo maecenas viverra pulvinar phasellus mattis ac mi.",
  //       },
  //       {
  //         name: "Crispy veg cheese Burger",
  //         price: "33EGP",
  //         description:
  //           "In justo maecenas viverra pulvinar phasellus mattis ac mi.",
  //       },
  //       {
  //         name: "Cheese Burger",
  //         price: "30EGP",
  //         description:
  //           "In justo maecenas viverra pulvinar phasellus mattis ac mi.",
  //       },
  //       {
  //         name: "Crispy veg cheese Burger",
  //         price: "33EGP",
  //         description:
  //           "In justo maecenas viverra pulvinar phasellus mattis ac mi.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Pizza",
  //     subItems: [
  //       {
  //         name: "Margherita Pizza",
  //         price: "35EGP",
  //         description:
  //           "In justo maecenas viverra pulvinar phasellus mattis ac mi.",
  //       },
  //       {
  //         name: "Garden Delight Pizza",
  //         price: "31EGP",
  //         description:
  //           "In justo maecenas viverra pulvinar phasellus mattis ac mi.",
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Tasty Food | {t("Menu")}</title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <LayoutTopWrapper title={t("Menu")} />
        <main className="menu">
          <Container fixed className="container">
            {allCategories.map((category, index) => (
              <section key={index} className="category">
                <SectionTitle title={category.name} fontSize={"40px"} />

                <div className="productsContainer">
                  {category.products.map((product) => (
                    <div key={product.id} className="product">
                      <div className="productDetails">
                        <h4>{product.name}</h4>
                        <span>.............</span>
                        <h5>{product.price}</h5>
                      </div>

                      <p>{product.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </Container>

          <Delivery />

          <Gallery />
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
