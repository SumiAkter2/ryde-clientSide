import About from "./About";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />

      <ChooseUs />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
