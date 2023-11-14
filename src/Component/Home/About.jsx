import aboutImage from "../../assets/Banner/about.png";
const About = () => {
  return (
    <div className="lg:mt-20 mt-[600px] mx-6 " id="about">
      <div className="hero lg:h-[600px] bg-secondary">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:text-start text-center">
            <p className="py-2 text-2xl font-semibold text-success">About Us</p>
            <h1 className="lg:text-5xl text-4xl my-3">Welcome to RYDE ,</h1>
            <p className="py-6">
              A dynamic division of Transportation Business Development and
              Investment, dedicated to reshaping the landscape of transportation
              services. RYDE is a division of Transcend IQ . RYDE stands
              <span className="font-bold">
                “ Reliable, Your Dependable Expedition ”.
              </span>
            </p>
          </div>
          <img src={aboutImage} className="lg:max-w-2xl rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default About;
