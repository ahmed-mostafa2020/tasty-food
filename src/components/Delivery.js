import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import { Container } from "@mui/material";
import delivery from "../../public/assets/images/Image.png";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import { ChangeTheme } from "../context/ThemeContext";

const Delivery = () => {
  const { myMode } = ChangeTheme();

  const { homeEndPointData } = FetchingAllEndPointsData();
  const firstData = homeEndPointData.data.page3;
  const secondData = homeEndPointData.data.page4;

  return (
    <>
      <section className={`delivery ${myMode}`}>
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
      </section>
    </>
  );
};

export default Delivery;
