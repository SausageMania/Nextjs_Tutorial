import Layout from "../components/Layout";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
/*  
  페이지 전환시 레이아웃을 유지할 수 있다.
  페이지 전환시 상태값을 유지할 수 있다.
  componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
  추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
  글로벌 CSS를 이 곳에 선언하면 된다.
*/
