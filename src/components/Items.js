import { Container } from "@mui/material";

import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
const Items = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  return <section className="items"></section>;
};
export default Items;
