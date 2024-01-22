import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import Image from "next/image";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allGallery = homeEndPointData.data.images;

  return (
    <section className="gallery">
      <SectionTitle title={"Foods Gallery"} fontSize={"35px"} />

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
