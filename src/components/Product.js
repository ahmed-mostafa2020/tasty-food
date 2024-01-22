import Image from "next/image";
import { ChangeTheme } from "../context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({ image, loader, name, description, price }) => {
  const { myMode } = ChangeTheme();

  AOS.init();

  return (
    <div
      className={`product ${myMode}`}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <figure>
        <Image
          src={image}
          loader={() => `${loader}`}
          alt="product"
          width={250}
          height={150}
        />
      </figure>

      <div className="text">
        <h4> {name} </h4>
        <p> {description} </p>
        <h5> {price} </h5>
      </div>
    </div>
  );
};

export default Product;
