import bgImage from "../../assets/Banner/bgImage.jpg";

const Services = () => {
  return (
    <div className="mb-12">
      <div className="text-center px-6">
        <p className="pt-2 font-bold ">Services</p>
        <p className="py-2 text-2xl font-bold text-success">
          Our Comprehensive Offering
        </p>
        <h1 className="text-xl mb-3">
          we provide a range of transportation services to meet your diverse
          needs
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-12 mt-12 mx-6">
        <div
          className="hero "
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="hero-overlay bg-opacity-80 bg-primary"></div>
          <div className="hero-content text-center text-secondary">
            <div className="max-w-md p-6">
              <h1 className="mb-5 text-3xl font-bold">RYDE Go</h1>
              <p className="mb-5">
                Your ideal choice for reliable and convenient everyday
                transportation, suitable for individuals and standard needs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero "
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="hero-overlay bg-opacity-80 bg-primary"></div>
          <div className="hero-content text-center text-secondary">
            <div className="max-w-md p-6">
              <h1 className="mb-5 text-3xl font-bold">RYDE Luxe</h1>
              <p className="mb-5">
                Elevate your experience with premium cars, offering a more
                luxurious and comfortable ride.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero "
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="hero-overlay bg-opacity-80 bg-primary"></div>
          <div className="hero-content text-center text-secondary">
            <div className="max-w-md p-6">
              <h1 className="mb-5 text-3xl font-bold">RYDE Corporate</h1>
              <p className="mb-5">
                Tailored solutions for businesses and corporate clients,
                ensuring professionalism and reliability in transportation
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
