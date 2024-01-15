import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../atomicDesign/atoms/SectionTitle";
import Image from "next/image";
import galleryImage from "../../public/assets/images/01 image.png";
import { FetchingAllEndPointsData } from "../context/FetchingDataContext";

const Gallery = () => {
  const { homeEndPointData } = FetchingAllEndPointsData();
  const allGallery = homeEndPointData && homeEndPointData.data.images;
  {
    console.log(allGallery);
  }

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
