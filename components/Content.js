import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Content = () => {
  const lorem30 =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae esse nam temporibus tempora numquam ab minus ullam maiores quam nemo adipisci, repellat, tempore quaerat distinctio amet placeat aperiam laudantium.";

  return (
    <div className="mx-4 lg:w-[1200px] lg:mx-auto">
      <h2 className="uppercase text-5xl text-red-600 mt-10 mb-28 underline underline-offset-[30px] decoration-2 decoration-amber-400">
        h2 <span className="font-bold">headline</span>
      </h2>

      <div className="flex flex-col gap-4  lg:flex-row lg:justify-between lg:gap-0">
        <div className="bg-red-600 aspect-video lg:w-[360px] lg:h-[360px]">
          <h5 className="flex flex-col justify-center items-center h-full p-4 text-white text-center">
            <LinesEllipsis
              text={lorem30}
              maxLine={3}
              ellipsis={"..."}
              trimRight
              basedOn={"letters"}
            />
            <button className="uppercase mt-8 border-2 rounded-full py-3 px-5 font-bold hover:text-red-600 hover:bg-white">
              Find jobs
            </button>
          </h5>
        </div>

        <div className="bg-red-600 aspect-video lg:w-[360px] lg:h-[360px]">
          <h5 className="flex flex-col justify-center items-center h-full p-4 text-white text-center">
            <LinesEllipsis
              text={lorem30}
              maxLine={3}
              ellipsis={"..."}
              trimRight
              basedOn={"letters"}
            />
            <button className="uppercase mt-8 border-2 rounded-full py-3 px-5 font-bold hover:text-red-600 hover:bg-white">
              Find jobs
            </button>
          </h5>
        </div>

        <div className="bg-red-600 aspect-video lg:w-[360px] lg:h-[360px]">
          <h5 className="flex flex-col justify-center items-center h-full p-4 text-white text-center">
            <LinesEllipsis
              text={lorem30}
              maxLine={3}
              ellipsis={"..."}
              trimRight
              basedOn={"letters"}
            />
            <button className="uppercase mt-8 border-2 rounded-full py-3 px-5 font-bold hover:text-red-600 hover:bg-white">
              Find jobs
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Content;
