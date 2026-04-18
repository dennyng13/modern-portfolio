import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-primary bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Denny Ng | Portfolio</title>
        <meta
          name="description"
          content="Denny Ng is a Full-stack Developer & Product Builder crafting bright, modern digital experiences."
        />
        <meta
          name="keywords"
          content="denny ng, react, next, nextjs, portfolio, full-stack developer, product, ui, ux, framer-motion"
        />
        <meta name="author" content="Denny Ng" />
        <meta name="theme-color" content="#f97316" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
