import About from "./About";
import Banner from "./Banner/Banner";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
