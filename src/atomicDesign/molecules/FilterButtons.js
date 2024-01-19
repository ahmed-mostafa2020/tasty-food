import { FetchingAllEndPointsData } from "@/src/context/FetchingDataContext";

const FilterButtons = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const categories = homeEndPointData.data.category;
  return (
    <ul className="filterButtons">
      {categories.map((category, index) => (
        <li className={index == 0 ? `active` : ""} key={index}>
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterButtons;
