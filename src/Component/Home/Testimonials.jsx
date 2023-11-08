import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import person1 from "../../assets/Review/person1.jpg";
import person2 from "../../assets/Review/person2.jpg";
import person3 from "../../assets/Review/person3.jpg";
import person4 from "../../assets/Review/person4.jpg";

const Testimonials = () => {
  return (
    <div className="mt-24 mb-6">
      <div className="text-center px-6">
        <p className="py-2 font-bold text-success text-2xl">Testimonial</p>
        <h1 className=" mb-3 font-bold text-xl">Some Words From Our Clients</h1>
      </div>
      <div className="lg:mx-12 mx-2 p-6 text-secondary mt-12">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 1,
            },
            865: {
              slidesPerView: 3,
            },
          }}
          className=" mb-12"
        >
          <SwiperSlide>
            <div className="p-6 shadow-2xl bg-success">
              <p className="font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                magni possimus sapiente, labore adipisci voluptates similique
                temporibus inventore minima aspernatur .
              </p>
              <div className="flex justify-start items-start mt-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src={person1}
                  alt="user-img"
                />
                <div className="ml-12">
                  <h1 className="text-xl font-semibold ">Albert</h1>
                  <div className="flex justify-start items-center">
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 shadow-2xl bg-success">
              <p className="font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                magni possimus sapiente, labore adipisci voluptates similique
                temporibus inventore minima aspernatur .
              </p>
              <div className="flex justify-start items-start mt-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src={person2}
                  alt="user-img"
                />
                <div className="ml-12">
                  <h1 className="text-xl font-semibold">Albert</h1>
                  <div className="flex justify-start items-center">
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 shadow-2xl bg-success">
              <p className="font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                magni possimus sapiente, labore adipisci voluptates similique
                temporibus inventore minima aspernatur .
              </p>
              <div className="flex justify-start items-start mt-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src={person3}
                  alt="user-img"
                />
                <div className="ml-12">
                  <h1 className="text-xl font-semibold">Albert</h1>
                  <div className="flex justify-start items-center">
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 shadow-2xl bg-success">
              <p className="font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                magni possimus sapiente, labore adipisci voluptates similique
                temporibus inventore minima aspernatur .
              </p>
              <div className="flex justify-start items-start mt-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src={person4}
                  alt="user-img"
                />
                <div className="ml-12">
                  <h1 className="text-xl font-semibold">Albert</h1>
                  <div className="flex justify-start items-center">
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
