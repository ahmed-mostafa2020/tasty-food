import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import Image from "next/image";

const Items = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allItems = homeEndPointData && homeEndPointData.data.category;
  return (
    <section
      className="items"
      style={{ backgroundColor: myPalette.background.shaped_border }}
    >
      <Container fixed className="container">
        {allItems.map((item) => (
          <div className="item" key={item.name}>
            <div className="item-box">
              <figure>
                <Image
                  className="item-image"
                  loader={() => `${item.image}`}
                  src={item.image}
                  alt="item"
                  width={110}
                  height={75}
                />
              </figure>

              <h4 className="item-name">{item.name}</h4>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
export default Items;
