import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import aboutImg from "../../public/assets/images/about-1 1.png";
import { FaCheckCircle } from "react-icons/fa";
import { ChangeTheme } from "../context/ThemeContext";

const About = () => {
  const { myPalette } = ChangeTheme();
  return (
    <section className="aboutUs">
      <figure>
        <Image src={aboutImg} alt="about" width={450} height={350} />
        <BaseImage width={450} height={350} />
      </figure>

      <div className="text">
        <SectionTitle title={"About Tasty Foods"} />

        <article>
          Egestas amet facilisis cras suspendisse orci volutpat. Enim ut et amet
          vitae facilisi vel odio nisl. Pellentesque malesuada massa proin
          cursus elit amet iaculis. Enim ut et amet vitae facilisi vel odio
          nisl. Pellentesque malesuada massa proin cursus elit amet iaculis.
        </article>

        <ul>
          <li>
            <FaCheckCircle style={{ color: myPalette.background.mainColor }} />
            <p>Delicious & Healthy Foods</p>
          </li>
          <li>
            <FaCheckCircle style={{ color: myPalette.background.mainColor }} />
            <p>Best Price & Offers</p>
          </li>
          <li>
            <FaCheckCircle style={{ color: myPalette.background.mainColor }} />
            <p>Made By Fresh Ingredients</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
