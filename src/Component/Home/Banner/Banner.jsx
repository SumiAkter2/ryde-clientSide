import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import PrimaryButton from "../../Share/Button/PrimaryButton";
import "./Banner.css";
import FindCar from "./FindCar";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero lg:h-[700px] h-[800px]  banner-bg-1 relative">
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero  ">
                <div className=" md:absolute left-20 md:text-start text-center text-secondary">
                  <h1 className=" text-xl font-semibold">
                    Elevating Journeys, Redefining Transportation Excellence
                  </h1>
                  <p className="py-6 lg:text-5xl text-4xl font-bold">
                    Your Journey, Our Responsibility
                  </p>
                  <p className="lg:w-1/2 font-semibold my-2 text-xl">
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
          <div className="hero lg:h-[700px] h-[800px] banner-bg-2 relative">
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
              <div className="hero  ">
                <div className=" md:absolute left-20 md:text-start text-center text-secondary">
                  <h1 className=" text-xl font-semibold  ">
                    Elevating Journeys, Redefining Transportation Excellence
                  </h1>
                  <p className="py-6 lg:text-5xl text-4xl font-bold">
                    Your Journey, Our Responsibility
                  </p>
                  <p className="lg:w-1/2 font-semibold my-2 text-xl">
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

      <div className="absolute lg:-bottom-40 -bottom-[600px] z-20 bg-secondary lg:mx-32 mx-8">
        <FindCar />
      </div>
    </div>
  );
};

export default Banner;
