import aboutImage from "../../assets/Banner/about.png";
const About = () => {
  return (
    <div className="lg:mt-16 mt-[700px] mx-6" id="about">
      <div className="hero min-h-screen bg-secondary">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:text-start text-center">
            <p className="py-2 text-2xl font-semibold text-success">About Us</p>
            <h1 className="lg:text-5xl text-4xl my-3">
              Redefining Transportation
            </h1>
            <p className="py-6">
              RYDE , a trading name of Transcend IQ, is dedicated to redefining
              transportation. Our acronym stands for
              <span className="font-bold">
                “Reliable, Your Dependable Expedition”.
              </span>
              We are on a mission to provide transportation solutions that
              prioritize reliability, quality, and intelligence. Learn more
              about our history, values, and the team behind our vision.
            </p>
          </div>
          <img src={aboutImage} className="lg:max-w-2xl rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default About;
