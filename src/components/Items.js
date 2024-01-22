import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import Image from "next/image";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";
import AOS from "aos";
import "aos/dist/aos.css";

const Items = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allItems = homeEndPointData && homeEndPointData.data.category;

  AOS.init();

  return (
    <section className="itemsWrapper">
      <div
        className="items"
        style={{ backgroundColor: myPalette.background.shaped_border }}
      >
        <Container fixed className="container">
          {allItems.map((item) => (
            <div className="item" key={item.name}>
              <div
                className="item-box"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-easing="linear"
                data-aos-once="true"
              >
                <figure>
                  <Image
                    className="item-image"
                    loader={() => `${item.image}`}
                    src={item.image}
                    alt="item"
                    width={180}
                    height={90}
                  />
                </figure>

                <h4 className="item-name">{item.name}</h4>
              </div>
            </div>
          ))}
        </Container>
      </div>
      <DownShapedBorder fill={myPalette.background.shaped_border} />
    </section>
  );
};
export default Items;
