import Image from "next/image";
import product from "../../public/assets/images/B-2 3.png";

const Product = () => {
  return (
    <div className="product">
      <Image src={product} alt="product" width={214} height={150} />

      <h4>Spicy Burger</h4>
      <p>Get a 20% Discount On First Order</p>
      <h5>$10.5</h5>
    </div>
  );
};

export default Product;
