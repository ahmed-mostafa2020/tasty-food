import HomeLayout from "../src/layout/HomeLayout";
// import Link from "next/link";
// import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { API_URLS } from "../src/util/API_URL";
// import { Container, Grid } from "@mui/material";

// Components
import Helmet from "../src/atomicDesign/molecules/Helmet";
import Items from "../src/components/Items";
import Offers from "../src/components/Offers";
import AboutUs from "../src/components/AboutUs";
import Delivery from "../src/components/Delivery";
import FilterGallery from "../src/components/FilterGallery";
import Feedback from "../src/components/Feedback";
import Gallery from "../src/components/Gallery";

const Home = ({ data }) => {
  const { t } = useTranslation();

  const allData = data.data;
  const allCategories = allData.category;
  const allOffers = allData.offers;
  const about = allData.about;
  const brand = allData.brand;
  const testimonials = allData.testimonial;
  const allGallery = allData.images;

  return (
    <>
      <Helmet brand={brand} pageName={t("Navbar.links.home")} />

      <HomeLayout>
        <main className="home">
          <Items allCategories={allCategories} />

          <Offers allOffers={allOffers} />

          <AboutUs about={about} brand={brand} />

          <Delivery allData={allData} />

          <FilterGallery allCategories={allCategories} />

          <Feedback testimonials={testimonials} background={true} />

          {/* <Container fixed className="container">
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
                    sm={12}
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
          </Container> */}

          <Gallery allGallery={allGallery} />
        </main>
      </HomeLayout>
    </>
  );
};
export default Home;

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
