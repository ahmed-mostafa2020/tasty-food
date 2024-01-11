import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import DownShapedBorder from "../atomicDesign/atoms/DownShapedBorder";

const Items = () => {
  const { myPalette } = ChangeTheme();

  const { homeEndPointData } = FetchingAllEndPointsData();
  return (
    <section
      className="items"
      style={{ backgroundColor: myPalette.background.shaped_border }}
    >
      <Container fixed className="container">
        <p className="rights">{homeEndPointData.data.brand.copy_rights}</p>
      </Container>
    </section>
  );
};
export default Items;
