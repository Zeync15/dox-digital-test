import React from "react";
import NewsCard from "./NewsCard";

const NewsSlider = () => {
  return (
    <div>
      <div className="px-4 py-8 lg:px-8">
        <div className="text-red-600 uppercase text-5xl">
          <h2 className="">h2</h2>
          <h2 className="font-bold underline underline-offset-[30px] decoration-2 decoration-amber-400">
            headline
          </h2>
        </div>
        <div className="mt-20 lg:mt-28 lg:flex gap-8 relative">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <button className="bg-amber-400 p-2 text-2xl font-bold absolute top-1/2 right-0 hidden lg:block">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
