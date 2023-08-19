import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { ChangeTheme } from "@/src/context/ThemeContext";

const HomeLayout = ({ children }) => {
  const { theme } = ChangeTheme();

  return (
    <section className={`homeLayout ${theme}`}>
      <div className="topPartWrapper">
        <Header />
        <Navbar />
      </div>

      <section className="wrapper_home">{children}</section>

      <Footer />
      <CopyRights />
    </section>
  );
};

export default HomeLayout;
