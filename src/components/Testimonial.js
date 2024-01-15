import { MdOutlineStar } from "react-icons/md";
import { ChangeTheme } from "../context/ThemeContext";
import Image from "next/image";
import sideImage from "../../public/assets/images/pasta 4.png";
import quote from "../../public/assets/images/Vector.svg";

const Testimonial = ({ rating, opinion, name, disc }) => {
  const { myPalette } = ChangeTheme();
  return (
    <div
      className="testimonial"
      style={{ backgroundColor: myPalette.background.default }}
    >
      <Image
        className="sideImage"
        src={sideImage}
        alt="sideImage"
        width={120}
        height={120}
      />

      <figure className="quoteBox">
        <Image
          className="quote"
          src={quote}
          alt="quote"
          width={30}
          height={60}
        />
        <Image
          className="quote"
          src={quote}
          alt="quote"
          width={30}
          height={60}
        />
      </figure>

      <ul className="rating">
        {/* will be dynamic */}
        <li>
          <MdOutlineStar style={{ color: myPalette.background.secColor }} />
        </li>
        <li>
          <MdOutlineStar />
        </li>
        <li>
          <MdOutlineStar />
        </li>
        <li>
          <MdOutlineStar />
        </li>
        <li>
          <MdOutlineStar />
        </li>
      </ul>

      <article>{opinion}</article>

      <div className="by">
        <h6>{name}</h6>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default Testimonial;
