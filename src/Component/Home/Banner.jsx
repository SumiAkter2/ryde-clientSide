import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import PrimaryButton from "../Share/Button/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={true}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero min-h-screen banner-bg-1">
            <div className="hero-overlay bg-black opacity-50"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero min-h-screen ">
                <div className=" md:absolute left-20 md:text-start text-center text-secondary">
                  <h1 className=" text-2xl font-semibold my-2 ">
                    Welcome to RYDE
                  </h1>
                  <p className="py-6 lg:text-5xl text-4xl font-bold">
                    Your Journey, Our Responsibility
                  </p>

                  <div className="mt-4">
                    <PrimaryButton text={"Reserve Now!"}></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen banner-bg-2 relative">
            <div className="hero-overlay bg-black opacity-50"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero min-h-screen ">
                <div className=" md:absolute left-20 md:text-start text-center text-secondary">
                  <h1 className=" text-2xl font-semibold my-2 ">
                    Welcome to RYDE
                  </h1>
                  <p className="py-6 lg:text-5xl text-4xl font-bold">
                    Your Journey, Our Responsibility
                  </p>

                  <div className="mt-4">
                    <PrimaryButton text={"Reserve Now!"}></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
