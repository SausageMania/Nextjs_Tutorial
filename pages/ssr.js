import Layout from "../components/Layout";

const Ssr = ({ from }) => {
  return <h2>This component is created from {from}</h2>;
};

export const getServerSideProps = async ({ req }) => {
  return { props: { from: req ? "server" : "client" } };
};

export default Ssr;
