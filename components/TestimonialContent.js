import React from "react";

const TestimonialContent = ({ data }) => {
  return (
    <div className="h-[300px] w-full rounded inline-block">
      <div className="whitespace-normal mt-10 lg:mt-20 mx-10 lg:ml-20">
        <div className="uppercase text-red-600 text-3xl font-bold">h5 headline</div>
        <p className="mt-4">{data.body}</p>
        <p className="mt-4">{data.body}</p>
      </div>
    </div>
  );
};

export default TestimonialContent;
