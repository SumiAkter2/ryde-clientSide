import { IoCarSport } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdHighQuality } from "react-icons/md";
const ChooseUs = () => {
  return (
    <div className="mt-20">
      <div className="text-center px-6 ">
        <p className="py-2 text-xl font-bold text-success">Why Choose RYDE ?</p>
        <h1 className="text-xl mb-3">Your Reliable Transportation Partner</h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-12 mx-6 my-12">
        <div className="p-10 shadow-2xl text-start max-w-sm">
          <IoCarSport size="55px" color="#ec3323" />

          <h1 className="text-xl font-bold my-4">Smart and Beautiful Cars</h1>
          <p className="font-semibold ">
            Our fleet offers stylish and efficient vehicles for all occasions.
          </p>
        </div>
        <div className="p-10 shadow-2xl text-start max-w-sm">
          <AiFillSafetyCertificate size="55px" color="#ec3323" />

          <h1 className="text-xl font-bold my-4">Safety and Comfort</h1>
          <p className="font-semibold ">
            We prioritize your well-being, ensuring safe and comfortable
            journeys.
          </p>
        </div>
        <div className="p-10 shadow-2xl text-start max-w-sm">
          <MdHighQuality size="55px" color="#ec3323" />

          <h1 className="text-xl font-bold my-4">Reliability and Quality</h1>
          <p className="font-semibold ">
            RYDE vehicles are well-maintained and roadworthy for your peace of
            mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
