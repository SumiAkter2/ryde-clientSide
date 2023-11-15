import About from "./About";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs";
import Contact from "./Contact";
import OurFleet from "./OurFleet";
import Partner from "./Partner";
import Services from "./Services";
// import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <OurFleet />
      <ChooseUs />
      <Partner />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};

export default Home;
