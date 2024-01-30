import { FetchingAllEndPointsData } from "@/src/context/FetchingDataContext";
import { useState } from "react";

const FilterButtons = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const categories = homeEndPointData.data.category;

  const [activeCategory, setActiveCategory] = useState();
  // Make state == index onClick, and then make when state == index put active

  return (
    <ul className="filterButtons">
      <li className="cate_all active">All</li>

      {categories.map((category, index) => {
        if (category.products.length > 0) {
          return (
            <li
              key={index}
              className={activeCategory === index ? `active` : `cate_${index}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default FilterButtons;
