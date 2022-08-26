import Content from "../components/Content";
import ContentWithImage from "../components/ContentWithImage";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewsSlider from "../components/NewsSlider";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
      <div className="relative w-full">
        <Hero />
        <Content />
        <Testimonial />
        <ContentWithImage />
        <NewsSlider />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
