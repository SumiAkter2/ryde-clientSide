import bgImage from "../../../assets/Banner/slider-2.jpg";
import SecondaryButton from "../../Share/Button/SecondaryButton";
const FindCar = () => {
  return (
    <div className=" lg:h-[250px] lg:flex justify-center ">
      <div
        className="hero lg:w-[400px] "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay bg-success opacity-90"></div>
        <div className="hero-content text-center text-secondary">
          <h1 className="mb-5 text-3xl font-bold p-4">
            Search Your Best Cars Here.
          </h1>
        </div>
      </div>
      <div>
        <form className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-primary lg:p-8 p-4 ">
          <input
            type="text"
            placeholder="From Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="To Address"
            className="input input-bordered w-full max-w-xs"
          />
          <select className="select w-full max-w-xs">
            <option selected>AC Car</option>

            <option>Non AC Car</option>
          </select>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text pl-3 text-gray-500">
                Journey Date
              </span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text pl-3 text-gray-500">
                Journey Time
              </span>
            </label>
            <input
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="text-black">
            <SecondaryButton text="FIND CAR" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindCar;
