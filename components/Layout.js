import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gap: 8,
          border: "1px solid black",
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <h2 style={{ cursor: "pointer", textAlign: "center" }}>홈</h2>
        </Link>
        <Link href="/about">
          <h2 style={{ cursor: "pointer", textAlign: "center" }}>소개</h2>
        </Link>
        <Link href="/search?keyword=test">
          <h2 style={{ cursor: "pointer", textAlign: "center" }}>검색</h2>
        </Link>
        <Link href="/ssr">
          <h2 style={{ cursor: "pointer", textAlign: "center" }}>SSR</h2>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
