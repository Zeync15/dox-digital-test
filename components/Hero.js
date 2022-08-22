import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <img src="/1920x1080.png" alt="bg" className="max-w-full  lg:hidden h-[720px]" />
      <img src="/3840x2160.png" alt="bg" className="max-w-full hidden lg:block lg:h-[1080px]" />

      <div className="absolute top-20 lg:top-52 left-10 lg:left-20 text-white mr-10 md:mr-0 mt-24">
        <div className="max-w-[720px] lg:max-w-[1080px]">
          <h1 className="text-5xl">
            H1 <span className="font-bold">HEADLINE</span>
          </h1>

          <div className="border my-3 max-w-[600px]"></div>

          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque minima
            deleniti distinctio? Nihil rem fugiat quo. Temporibus, praesentium incidunt.
          </p>

          <div className="flex flex-col lg:flex-row mt-4 text-white lg:gap-6 mx-3 lg:mx-0">
            <button className="py-1 px-8 border-2 rounded-full">
              <Link href="#">BUTTON 1</Link>
            </button>
            <button className="py-1 px-8 border-2 rounded-full mt-3 lg:mt-0">
              <Link href="#">BUTTON 2</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
