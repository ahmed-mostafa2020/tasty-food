import Image from "next/image";

const Product = ({ image, name, description, price }) => {
  return (
    <div className="product">
      <Image src={image} alt="product" width={214} height={150} />

      <h4>{name}</h4>
      <p> {description} </p>
      <h5> {price} </h5>
    </div>
  );
};

export default Product;
