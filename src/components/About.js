import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import { FaCheckCircle } from "react-icons/fa";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import AtomicButton from "../atomicDesign/atoms/AtomicButton";

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
        <div>
          <SectionTitle title={data.title} fontSize={"35px"} />

          <article>{data.content}</article>
        </div>

        <AtomicButton
          content={"Order Online"}
          href={"/"}
          bgColor={myPalette.background.secColor}
          textColor={myPalette.text.dark}
        />
      </div>
    </>
  );
};

export default About;
