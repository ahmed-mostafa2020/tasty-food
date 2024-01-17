import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import BaseImage from "../atomicDesign/atoms/BaseImage";
import aboutImg from "../../public/assets/images/about-1 1.png";
import { FaCheckCircle } from "react-icons/fa";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import { Container } from "@mui/material";

const About = ({ container }) => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.about;

  return (
    <section className="aboutUs">
      {container ? (
        <Container className="container">
          <figure>
            <Image src={aboutImg} alt="about" width={450} height={350} />
            <BaseImage width={450} height={350} />
          </figure>

          <div className="text">
            <SectionTitle title={data.title} fontSize={"35px"} />

            <article>{data.content}</article>

            <ul>
              <li>
                <FaCheckCircle
                  style={{ color: myPalette.background.mainColor }}
                />
                <p>Delicious & Healthy Foods</p>
              </li>
              <li>
                <FaCheckCircle
                  style={{ color: myPalette.background.mainColor }}
                />
                <p>Best Price & Offers</p>
              </li>
              <li>
                <FaCheckCircle
                  style={{ color: myPalette.background.mainColor }}
                />
                <p>Made By Fresh Ingredients</p>
              </li>
            </ul>
          </div>
        </Container>
      ) : (
        <>
          <figure>
            <Image src={aboutImg} alt="about" width={450} height={350} />
            <BaseImage width={450} height={350} />
          </figure>

          <div className="text">
            <SectionTitle title={data.title} fontSize={"35px"} />

            <article>{data.content}</article>

            <ul>
              <li>
                <FaCheckCircle
                  style={{ color: myPalette.background.mainColor }}
                />
                <p>Delicious & Healthy Foods</p>
              </li>
              <li>
                <FaCheckCircle
                  style={{ color: myPalette.background.mainColor }}
                />
                <p>Best Price & Offers</p>
              </li>
              <li>
                <FaCheckCircle
                  style={{ color: myPalette.background.mainColor }}
                />
                <p>Made By Fresh Ingredients</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default About;
