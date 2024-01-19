import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import { FaCheckCircle } from "react-icons/fa";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const About = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.about;

  return (
    <>
      <figure>
        <Image
          src={data.image}
          loader={() => `${data.image}`}
          alt="about"
          width={300}
          height={300}
        />
        <BaseImage width={450} height={350} />
      </figure>

      <div className="text">
        <SectionTitle title={data.title} fontSize={"35px"} />

        <article>{data.content}</article>

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
    </>
  );
};

export default About;
