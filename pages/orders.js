import Head from "next/head";
import Layout from "../src/layout/Layout";

const orders = () => {
  return (
    <>
      <Head>
        <title>Tasty Food | Orders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <div className="orders">orders</div>
      </Layout>
    </>
  );
};

export default orders;
