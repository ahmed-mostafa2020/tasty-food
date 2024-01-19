import Head from "next/head";
import HomeLayout from "../src/layout/HomeLayout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { API_URLS } from "../src/util/API_URL";
import { Container, Grid } from "@mui/material";
import { ChangeTheme } from "@/src/context/ThemeContext";
import Image from "next/image";
import DownShapedBorder from "@/src/atomicDesign/atoms/DownShapedBorder";
import Items from "../src/components/Items";
import Offers from "../src/components/Offers";
import AboutUs from "../src/components/AboutUs";
import Delivery from "../src/components/Delivery";
import FilterGallery from "../src/components/FilterGallery";
import Feedback from "../src/components/Feedback";
import Gallery from "../src/components/Gallery";

const Home = ({ data }) => {
  const { myMode, myPalette } = ChangeTheme();

  const { t } = useTranslation();

  const allCategories = data.data.category;

  return (
    <>
      <Head>
        <title>Tasty Food | {t("Home")} </title>
        <meta
          name="description"
          content="online shopping with our e-commerce app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <HomeLayout>
        <main className="home">
          <Items />

          <DownShapedBorder fill={myPalette.background.shaped_border} />

          <Container fixed className="container">
            <Offers />

            <AboutUs />
          </Container>

          <Delivery />

          <FilterGallery />

          <Feedback />

          <Container fixed className="container">
            <Grid
              sx={{ marginTop: 0 }}
              item
              container
              rowSpacing={3}
              columnSpacing={{ sm: 1, md: 2, lg: 2 }}
            >
              {data &&
                allCategories.map((category) => (
                  <Grid
                    className="column"
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    key={category.name}
                  >
                    <Link
                      href={{
                        pathname: `/category/${category.slug}`,
                      }}
                    >
                      <div className={`category-box ${myMode}`}>
                        <figure className="category-img">
                          <Image
                            loader={() => `${category.image}`}
                            src={`${category.image}`}
                            alt="category"
                            width={370}
                            height={220}
                          />
                        </figure>

                        <div className="category-info">
                          <h4>{category.name}</h4>
                        </div>
                      </div>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Container>

          <Gallery />
        </main>
      </HomeLayout>
    </>
  );
};
export default Home;

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
