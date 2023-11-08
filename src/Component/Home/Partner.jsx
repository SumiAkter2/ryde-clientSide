import img from "../../assets/Banner/slider-1.jpg";
import PrimaryButton from "../Share/Button/PrimaryButton";
const Partner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div
          className="hero-overlay bg-primary
         bg-opacity-80"
        ></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <div>
              <h1 className="mb-5 lg:text-4xl text-2xl font-bold ">
                RYDE provides innovative opportunities for car owners and
                investors
              </h1>

              <div className="lg:flex  justify-center items-center lg:text-start text-center  mt-12 mb-20 gap-10">
                <div className="lg:w-96 w-80 h-64 p-8 border border-secondary mt-2">
                  <h1 className="mb-5 text-2xl font-bold text-success">
                    Car Owners Partnership:
                  </h1>
                  <p>
                    Transform your vehicle into an asset. Surrender your car to
                    RYDE , and we’ll convert it into a valuable asset. You
                    receive a generous share from the proceeds.
                  </p>
                </div>
                <div className="lg:w-96 w-80 h-64 p-8 border border-secondary mt-2">
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
    </div>
  );
};

export default Partner;
