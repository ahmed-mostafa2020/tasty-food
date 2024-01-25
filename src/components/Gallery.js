import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionCrown from "../atomicDesign/molecules/SectionCrown";
import { useTranslation } from "next-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allGallery = homeEndPointData.data.images;

  return (
    <section className="gallery">
      <SectionCrown title={t("Gallery.title")} />
      <Swiper slidesPerView={5} spaceBetween={10} className="mySwiper">
        {allGallery.map((gallery, index) => (
          <SwiperSlide key={index}>
            <Image
              loader={() => `${gallery}`}
              src={gallery}
              alt="gallery"
              width={280}
              height={280}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
