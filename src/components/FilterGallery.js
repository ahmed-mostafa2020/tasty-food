import { Container } from "@mui/material";
import Product from "../components/Product";
// import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
import SectionCrown from "../atomicDesign/molecules/SectionCrown";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const FilterGallery = ({ allCategories }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [allActive, setAllActive] = useState(true);
  // Make state == index onClick, and then make when state == index put active

  const { t } = useTranslation();

  return (
    <section className="filterGallery">
      <Container>
        <SectionCrown title={t("FilterGallery.title")} />

        <ul className="filterButtons">
          <li
            className={allActive ? "active" : ""}
            onClick={() => (setActiveCategory(null), setAllActive(true))}
          >
            All
          </li>

          {allCategories.map((category, index) => {
            if (category.products.length > 0) {
              return (
                <li
                  key={index}
                  className={activeCategory === index ? "active" : ""}
                  onClick={() => (
                    setActiveCategory(index), setAllActive(false)
                  )}
                >
                  {category.name}
                </li>
              );
            }
          })}
        </ul>

        <div className="productsBox">
          {activeCategory == null
            ? allCategories.map((category) => {
                if (category.products.length > 0) {
                  return category.products.map((product, index) => (
                    <Product
                      key={index}
                      loader={product.image}
                      image={product.image}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                    />
                  ));
                }
              })
            : allCategories[activeCategory].products.map((product, index) => (
                <Product
                  key={index}
                  loader={product.image}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
        </div>
      </Container>
    </section>
  );
};

export default FilterGallery;
