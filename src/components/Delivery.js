import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import delivery from "../../public/assets/images/Image.png";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const Delivery = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const firstData = homeEndPointData.data.page3;
  const secondData = homeEndPointData.data.page4;

  return (
    <>
      <section
        className="delivery"
        style={{
          backgroundColor: `${myPalette.background.footer}`,
        }}
      >
        <DownShapedBorder fill={myPalette.background.default} />

        <Container className="container">
          <div>
            <SectionTitle title={firstData.title} fontSize={"30px"} />
            <article>{firstData.content}</article>
          </div>

          <figure>
            <Image src={delivery} alt="delivery" width={300} height={300} />
          </figure>

          <div>
            <SectionTitle title={secondData.title} fontSize={"30px"} />
            <article>{secondData.content}</article>
          </div>
        </Container>

        <UpShapedBorder fill={myPalette.background.default} />
      </section>
    </>
  );
};

export default Delivery;
