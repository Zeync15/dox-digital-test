import { useEffect, useRef, useState } from "react";
import TestimonialContent from "./TestimonialContent";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMockData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((data) => setData(data.splice(0, 3)))
        .catch((err) => console.log(err));
    };
    getMockData();
  }, []);

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1)),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="my-0 mx-auto overflow-hidden bg-orange-200 mt-10 pb-20">
      <div
        className="whitespace-nowrap ease-in duration-500"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {data.map((i) => (
          <TestimonialContent data={i} key={i.id} />
        ))}
      </div>

      <div className="slideshowDots mt-10 lg:mt-0 ml-10 lg:ml-20">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`inline-block h-[20px] w-[20px] rounded-full cursor-pointer mt-[15px] mx-[7px] mb-0 bg-[#c4c4c4] ${
              index === idx ? "bg-[#6a0dad]" : ""
            }`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
