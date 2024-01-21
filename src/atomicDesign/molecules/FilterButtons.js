import { FetchingAllEndPointsData } from "@/src/context/FetchingDataContext";
import { useState } from "react";

const FilterButtons = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const categories = homeEndPointData.data.category;

  const [activeCategory, setActiveCategory] = useState(0);
  // Make state == index onClick, and then make when state == index put active

  return (
    <ul className="filterButtons">
      {categories.map((category, index) => (
        <li
          key={index}
          className={activeCategory === index ? `active` : ""}
          onClick={() => setActiveCategory(index)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterButtons;
