import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const FormTopWrapper = ({ children, title }) => {
  // if u want bg image in light mode just class myMode
  return (
    <>
      <div className="formTopWrapper">
        <Header />
        <Navbar />
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </>
  );
};

export default FormTopWrapper;
