import fleet1 from "../../assets/Fleet/sedan.png";
import fleet2 from "../../assets/Fleet/premium.png";
import fleet3 from "../../assets/Fleet/corporate.png";
import fleet4 from "../../assets/Fleet/truck.png";
import SecondaryButton from "../Share/Button/SecondaryButton";

const OurFleet = () => {
  return (
    <div>
      <div className="text-center px-6 ">
        <p className="py-2 text-xl font-bold text-success">Our Vehicle Fleet</p>
        <h1 className="text-2xl mb-3">Exploring Our Fleet</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:mx-12 mx-6 my-12">
        <div className="shadow-2xl px-4 text-center pt-6">
          <img src={fleet1} alt="fleet-image" />
          <h1 className="text-xl font-bold my-2">
            Sedans: Efficiency and Style
          </h1>
          <p>
            Ideal for individuals and small groups, offering comfort and
            convenience.
          </p>
          <p className="font-bold my-4">
            $50 <span className="text-success "> /Day</span>
          </p>
          <SecondaryButton text="View More" />
        </div>
        <div className="shadow-2xl px-4 text-center pt-6">
          <img src={fleet2} alt="fleet-image" />
          <h1 className="text-xl font-bold my-2">
            Premium Cars: Luxury Redefined
          </h1>
          <p>
            levate your journey with high-end vehicles for special occasions and
            VIP experiences.
          </p>
          <p className="font-bold my-4">
            $80 <span className="text-success "> /Day</span>
          </p>
          <SecondaryButton text="View More" />
        </div>
        <div className="shadow-2xl px-4 text-center pt-6">
          <img src={fleet3} alt="fleet-image" />
          <h1 className="text-xl font-bold my-2">
            Corporate Transport: Professional and Reliable
          </h1>
          <p>
            Tailored for businesses and corporate clients, ensuring
            professionalism and reliability.
          </p>
          <p className="font-bold my-4">
            $100 <span className="text-success "> /Day</span>
          </p>
          <SecondaryButton text="View More" />
        </div>
        <div className="shadow-2xl p-4 text-center">
          <img src={fleet4} alt="fleet-image" />
          <h1 className="text-xl font-bold my-2">
            Trucking Services: Heavy-Duty Solutions
          </h1>
          <p>
            Designed to meet the demands of logistics and industrial businesses.
          </p>
          <p className="font-bold my-4">
            $50 <span className="text-success "> /Day</span>
          </p>
          <SecondaryButton text="View More" />
        </div>
      </div>
    </div>
  );
};

export default OurFleet;
