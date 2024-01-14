import Image from "next/image";

const Offer = ({ name, image, discount, order, cost }) => {
  return (
    <div className="offer">
      <div className="text">
        <h2>{name}</h2>
        <p>
          Get a <span>{discount}</span> Discount
        </p>
        <p>
          On <span>{order}</span>
        </p>
        <h3>${cost}</h3>
      </div>

      <figure>
        <Image src={image} alt="discount" width={100} height={100} />
      </figure>
    </div>
  );
};

export default Offer;
