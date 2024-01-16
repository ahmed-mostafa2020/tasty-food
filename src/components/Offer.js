import Image from "next/image";

const Offer = ({ title, image, description, price }) => {
  return (
    <div className="offer">
      <div className="text">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <h3>${price}</h3>
      </div>

      <figure>
        <Image src={image} alt="discount" width={100} height={100} />
      </figure>
    </div>
  );
};

export default Offer;
