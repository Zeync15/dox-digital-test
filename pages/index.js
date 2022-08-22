import Content from "../components/Content";
import ContentWithImage from "../components/ContentWithImage";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
      <div className="relative w-full">
        <Hero />
        <Content />
        <ContentWithImage />
      </div>
    </div>
  );
};

export default Home;
