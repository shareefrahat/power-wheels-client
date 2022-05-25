import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-row justify-around items-start lg:items-center bg-contain lg:bg-cover h-[250px] lg:h-[550px]"
          >
            <div className="text-left font-primary my-5">
              <h5 className="text-xl lg:text-7xl font-bold">
                Safety Parts
                <br />
                Collections
              </h5>
              <button className="btn btn-xs lg:btn-lg btn-primary my-4 lg:mt-10">
                Purchase Now
              </button>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-row justify-around items-start lg:items-center bg-contain lg:bg-cover h-[250px] lg:h-[550px]"
          >
            <div className="text-left font-primary my-5">
              <h5 className="text-xl lg:text-7xl font-bold">
                Engine Parts
                <br />
                Assembly
              </h5>
              <button className="btn btn-xs lg:btn-lg btn-primary my-4 lg:mt-10">
                Purchase Now
              </button>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
