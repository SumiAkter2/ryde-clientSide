import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import PrimaryButton from "../../Share/Button/PrimaryButton";
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
          <div className="hero h-[600px] banner-bg-1 relative">
            <div className="hero-overlay bg-black opacity-50"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero h-[500px] ">
                <div className=" md:absolute left-20 md:text-start text-center text-secondary">
                  <h1 className=" text-2xl font-semibold  ">Welcome to RYDE</h1>
                  <p className="py-6 lg:text-5xl text-4xl font-bold">
                    Your Journey, Our Responsibility
                  </p>
                  <p className="lg:w-1/2 font-semibold my-2">
                    RYDE , a division of Transportation Business Development and
                    Investment, is your trusted partner for reliable, safe, and
                    intelligent transportation services. Our commitment is to
                    make your journey dependable and comfortable with our fleet
                    of smart and beautiful cars. Explore our services and
                    investment opportunities for a seamless transportation
                    experience
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
          <div className="hero h-[600px] banner-bg-2 relative">
            <div className="hero-overlay bg-black opacity-50"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero h-[500px] ">
                <div className=" md:absolute left-20 md:text-start text-center text-secondary">
                  <h1 className=" text-2xl font-semibold  ">Welcome to RYDE</h1>
                  <p className="py-6 lg:text-5xl text-4xl font-bold">
                    Your Journey, Our Responsibility
                  </p>
                  <p className="lg:w-1/2 font-semibold my-2">
                    RYDE , a division of Transportation Business Development and
                    Investment, is your trusted partner for reliable, safe, and
                    intelligent transportation services. Our commitment is to
                    make your journey dependable and comfortable with our fleet
                    of smart and beautiful cars. Explore our services and
                    investment opportunities for a seamless transportation
                    experience
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
