import Axios from "axios";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = ({ product }) => {
  return (
    <div>
      <Head>
        <title>HOME | Next.js</title>
      </Head>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridAutoFlow: "dense",
          columnGap: 16,
          rowGap: 8,
        }}
      >
        {product.map((data) => (
          <div key={data.name}>
            <img src={data.api_featured_image} alt={"no-img"} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>${data.price}</span>
              <span style={{ textAlign: "right" }}>{data.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const apiUrl =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      product: data,
    },
  };
};

export default Index;
