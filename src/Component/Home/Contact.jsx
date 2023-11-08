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
      <div className="lg:flex justify-around items-center">
        <div>
          <h1>Contact Info</h1>
        </div>
        <div>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w-xs"
            />
            <textarea
              className="textarea textarea-success"
              placeholder="Bio"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
