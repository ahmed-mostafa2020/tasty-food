import Image from "next/image";
import { ChangeTheme } from "../context/ThemeContext";

const Product = ({ image, loader, name, description, price }) => {
  const { myMode } = ChangeTheme();

  return (
    <div className={`product ${myMode}`}>
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
