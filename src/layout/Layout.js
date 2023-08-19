import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";

import { ChangeTheme } from "@/src/context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = ChangeTheme();

  return (
    <section className={`layout ${theme}`}>
      <div className="topPartWrapper">
        <Header />
        <Navbar />
        <Banner />
      </div>

      <section className="wrapper_pages">{children}</section>
      <Footer />
      <CopyRights />
    </section>
  );
};

export default Layout;
