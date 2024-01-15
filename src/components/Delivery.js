import Image from "next/image";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import delivery from "../../public/assets/images/Image.png";
import UpShapedBorder from "../atomicDesign/atoms/UpShapedBorder";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";

const Delivery = () => {
  const { myPalette } = ChangeTheme();
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
            <SectionTitle
              title={"Choose your favorite food"}
              fontSize={"30px"}
            />
            <article>
              Egestas amet facilisis cras suspendisse orci volutpat. Enim ut et
              amet vitae facilisi vel odio nisl. Pellentesque malesuada massa
              proin cursus elit amet iaculis.
            </article>
          </div>

          <figure>
            <Image src={delivery} alt="delivery" width={300} height={300} />
          </figure>

          <div>
            <SectionTitle
              title={"Order Online and Get Fast Delivery"}
              fontSize={"30px"}
            />
            <article>
              Egestas amet facilisis cras suspendisse orci volutpat. Enim ut et
              amet vitae facilisi vel odio nisl.
            </article>
          </div>
        </Container>

        <UpShapedBorder fill={myPalette.background.default} />
      </section>
    </>
  );
};

export default Delivery;
