import Link from "next/link";

import Head from "next/head";
import Header from "./Header";
// I import my header

// I Then create the var which will be my layout
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

// I then create layout function using props
const Layout = (props) => (
  // I the the head tag and bootstrap
  // after that I use my header and then use props.children
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </div>
);

// Then export default

export default Layout;
