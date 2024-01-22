import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer = ({ title, image, description, price }) => {
  AOS.init();

  return (
    <div className="offer" data-aos="fade-up" data-aos-duration="2000">
      <div className="text">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <h3>${price}</h3>
      </div>

      <figure>
        <Image
          src={image ? `${image}` : "/"}
          alt="discount"
          width={100}
          height={100}
        />
      </figure>
    </div>
  );
};

export default Offer;
