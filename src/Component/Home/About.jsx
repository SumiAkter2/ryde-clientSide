import aboutImage from "../../assets/Banner/about.png";
import PrimaryButton from "../Share/Button/PrimaryButton";
const About = () => {
  return (
    <div className="lg:mt-20 mt-[700px]">
      <div className="hero min-h-screen bg-secondary text-primary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={aboutImage} className="max-w-2xl rounded-lg " />
          <div>
            <p className="py-2 text-2xl font-semibold text-success">About Us</p>
            <h1 className="lg:text-5xl text-4xl my-3">
              Redefining Transportation
            </h1>
            <p className="py-6">
              RYDE , a trading name of Transcend IQ, is dedicated to redefining
              transportation. Our acronym stands for
              <span className="font-bold">
                {" "}
                “Reliable, Your Dependable Expedition”.
              </span>
              We are on a mission to provide transportation solutions that
              prioritize reliability, quality, and intelligence. Learn more
              about our history, values, and the team behind our vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
