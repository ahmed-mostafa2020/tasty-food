import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import Image from "next/image";
import galleryImage from "../../public/assets/images/01 image.png";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allGallery = homeEndPointData && homeEndPointData.data.images;

  return (
    <section className="gallery">
      <SectionTitle title={"Foods Gallery"} fontSize={"35px"} />

      <Swiper slidesPerView={5} spaceBetween={5} className="mySwiper">
        {/* {allGallery.map((gallery, index) => (
          <SwiperSlide key={gallery.index}>
            <Image src={gallery} alt="gallery" width={280} height={280} />
          </SwiperSlide>
        ))} */}

        <SwiperSlide>
          <Image src={galleryImage} alt="gallery" width={280} height={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={galleryImage} alt="gallery" width={280} height={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={galleryImage} alt="gallery" width={280} height={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={galleryImage} alt="gallery" width={280} height={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={galleryImage} alt="gallery" width={280} height={280} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={galleryImage} alt="gallery" width={280} height={280} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
