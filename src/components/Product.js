import Image from "next/image";

const Product = ({ image, name, description, price }) => {
  return (
    <div className="product">
      <Image src={image} alt="product" width={250} height={150} />

      <div className="text">
        <h4> {name} </h4>
        <p> {description} </p>
        <h5> {price} </h5>
      </div>
    </div>
  );
};

export default Product;
