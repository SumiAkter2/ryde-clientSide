import img from "../../assets/Banner/slider-1.jpg";
import PrimaryButton from "../Share/Button/PrimaryButton";
const Partner = () => {
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div
          className="hero-overlay bg-primary
         bg-opacity-80"
        ></div>
        <div className=" text-center text-white">
          <div className="  my-12">
            <div className="text-center px-6">
              <p className="pt-2 font-bold ">Investment</p>
              <p className="py-2 text-2xl font-bold text-success">
                Unlocking Opportunities
              </p>
              <h1 className="text-xl mb-3">
                RYDE provides innovative opportunities for car owners and
                investors: &quot; Partnering with RYDE A Willingness to Prosper
                &quot;
              </h1>
            </div>

            <div className="lg:flex  justify-center items-center lg:text-start text-center  mt-12 mb-20 gap-10 mx-2 lg:mx-0">
              <div className="lg:w-96 w-80 h-64 p-8 border border-secondary mt-2 mx-4">
                <h1 className="mb-5 text-2xl font-bold text-success">
                  Car Owners Partnership:
                </h1>
                <p>
                  Transform your vehicle into an asset. Surrender your car to
                  RYDE , and we’ll convert it into a valuable asset. You receive
                  a generous share from the proceeds.
                </p>
              </div>
              <div className="lg:w-96 w-80 h-64 p-8 border border-secondary mt-2 mx-4">
                <h1 className="mb-5 text-2xl font-bold text-success">
                  Commercial Car Hiring Investment:
                </h1>
                <p>
                  No car? No problem! Invest in a vehicle, and we’ll take care
                  of the rest. Receive a share of the profits for 36 months
                  without owning a vehicle.
                </p>
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold">
              Do You Want To Earn With Us? So Don&apos;t Be Late.
            </h1>

            <PrimaryButton text="Become a Partner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
