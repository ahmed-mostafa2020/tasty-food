import { Container } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import Link from "next/link";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const CopyRights = () => {
  const { myPalette } = ChangeTheme();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const data = homeEndPointData.data.brand;

  return (
    <section
      className="copyRights"
      style={{ background: `${myPalette.background.copy_rights}` }}
    >
      <Container fixed className="container">
        <p className="rights">{data.copy_rights}</p>

        <Link href={"/terms"} style={{ color: myPalette.text.primary }}>
          {homeEndPointData.data.terms.title}
        </Link>
      </Container>
    </section>
  );
};

export default CopyRights;
