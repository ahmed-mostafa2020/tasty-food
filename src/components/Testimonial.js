import { ChangeTheme } from "../context/ThemeContext";
import Image from "next/image";
import sideImage from "../../public/assets/images/pasta 4.png";
import quote from "../../public/assets/images/Vector.svg";
import StarIcon from "@mui/icons-material/Star";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = ({ rating, opinion, name, disc }) => {
  const { myPalette } = ChangeTheme();

  AOS.init();

  // Rating logic
  const minRating = 1;
  const maxRating = 5;

  if (rating < minRating) {
    rating = minRating;
  } else if (rating > maxRating) {
    rating = maxRating;
  }

  const goodStars = Array.from({ length: rating }, (_, index) => (
    <li key={index}>
      <StarIcon
        sx={{
          color: myPalette.background.secColor,
        }}
      />
    </li>
  ));

  const badStars = Array.from({ length: maxRating - rating }, (_, index) => (
    <li key={index}>
      <StarIcon />
    </li>
  ));

  return (
    <div
      className="testimonial"
      style={{ backgroundColor: myPalette.background.default }}
      data-aos="fade-up"
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

      <div>
        <ul className="rating">
          {goodStars}
          {badStars}
        </ul>

        <article>{opinion}</article>
      </div>

      <div className="by">
        <h6>{name}</h6>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default Testimonial;
