import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Search = ({ from, query }) => {
  const router = useRouter();
  console.log(router);
  return <h2>당신이 검색한 키워드는 "{query.keyword}" 입니다.</h2>;
};

export const getServerSideProps = async ({ req, query }) => {
  return { props: { query, from: req ? "server" : "client" } };
};

export default Search;
