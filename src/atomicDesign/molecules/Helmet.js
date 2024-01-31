import Head from "next/head";
// import { FetchingAllEndPointsData } from "../../context/FetchingDataContext";

const Helmet = ({ brand, pageName }) => {
  // const { homeEndPointData } = FetchingAllEndPointsData();
  // const data = homeEndPointData && homeEndPointData.data.brand;

  return (
    <Head>
      <title>
        {brand.name} | {pageName}
      </title>
      <meta charset="UTF-8" />
      <meta
        name="description"
        content="Online shopping with our e-commerce app locally sourced food and drinks
          online ordering and delivery"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="929, Cafe, Drinks, Qurba" />

      <link rel="icon" href="/favicon.svg" />

      <meta property="og:image" content={"src"} />

      <meta property="og:image:type" content="image/png" />

      <meta property="og:image:width" content="1024" />

      <meta property="og:image:height" content="1024" />

      <meta property="og:type" content={"type"} />
      <meta property="og:title" content={"title"} />
      <meta property="og:description" content={"description"} />

      {/* <link rel="icon" href={data.logo} /> */}
    </Head>
  );
};

export default Helmet;
