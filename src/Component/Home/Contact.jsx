import PrimaryButton from "../Share/Button/PrimaryButton";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

const Contact = () => {
  return (
    <div>
      <div className="text-center px-6">
        <p className="pt-2 font-bold ">Contact Us</p>
        <p className="py-2 text-2xl font-bold text-success">Getting in Touch</p>
        <h1 className="text-xl mb-3">
          Questions or need more information? Reach out to us through our
          contact form, phone, or email. We’re here to assist you. Join the RYDE
          community and enjoy a dependable expedition with intelligence and
          quality.
        </h1>
      </div>
      <div className="lg:flex justify-between items-center my-12">
        <div className="bg-success lg:h-96 lg:px-12 px-6 lg:w-1/2 text-secondary py-8">
          <h1 className="text-3xl font-semibold">CONTACT INFO</h1>

          <div className="mt-12 ">
            <h1 className="text-xl font-semibold">Email Us</h1>
            <p className="lg:flex justify-start items-center mt-4 text-xl">
              <MdEmail size="25px" className="mr-3" /> Abc@gmail.com
            </p>

            <h1 className="text-xl font-semibold mt-8">Call Us</h1>
            <p className="lg:flex justify-start items-center mt-4 text-xl">
              <PiPhoneCallFill size="25px" className="mr-3" /> +9999999999
            </p>
          </div>
        </div>
        <div className="bg-primary lg:h-96 lg:px-12 px-6 py-8 lg:w-1/2">
          <form className="grid gap-2 ">
            <h1 className="text-2xl text-secondary font-bold ml-3 mb-4">
              LEAVE YOUR MESSAGE
            </h1>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-success ml-3 rounded-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-success ml-3 rounded-none"
            />
            <textarea
              className="textarea textarea-success ml-3 rounded-none"
              placeholder="Message"
            ></textarea>
            <div>
              <PrimaryButton text="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
