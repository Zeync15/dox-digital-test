import Link from "next/link";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-[1500px] max-h-fit mx-4 lg:mx-auto">
        <img src="/300x120.png" alt="" className="py-4" />

        <div className="lg:flex mt-4 gap-20">
          <div className="lg:w-4/12">
            <h5 className="uppercase font-bold text-xl mb-4">section 1</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eligendi cupiditate
              sint ea dolorem reiciendis officiis magnam nihil atque vero!
            </p>
          </div>

          <div className="lg:w-4/12 mt-16 lg:mt-0">
            <h5 className="uppercase font-bold text-xl mb-4">links</h5>
            <ul className="list-disc ml-10">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </div>

          <div className="lg:w-4/12 mt-16 lg:mt-0">
            <h5 className="uppercase font-bold text-xl mb-4">address</h5>
            <p>A-3-1, GlomacDamansara,</p>
            <p>Jalan Damansara, Taman Tun Dr Ismail.</p>
            <p>60000 Kuala Lumpur.</p>
          </div>

          <div className="lg:w-4/12 mt-16 lg:mt-0 flex flex-col gap-y-3">
            <button className="py-2 px-8 border-2 rounded-full">
              <Link href="#">BUTTON 1</Link>
            </button>
            <button className="py-2 px-8 border-2 rounded-full">
              <Link href="#">BUTTON 2</Link>
            </button>
            <button className="py-2 px-8 border-2 rounded-full">
              <Link href="#">BUTTON 3</Link>
            </button>
            <button className="py-2 px-8 border-2 rounded-full">
              <Link href="#">BUTTON 4</Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center text-center mt-8">
          <div className="border rounded-full p-2 mx-2 cursor-pointer">
            <Link href="#">
              <ImFacebook />
            </Link>
          </div>
          <div className="border rounded-full p-2 mx-2 cursor-pointer">
            <Link href="#">
              <ImTwitter />
            </Link>
          </div>
          <div className="border rounded-full p-2 mx-2 cursor-pointer">
            <Link href="#">
              <ImLinkedin2 />
            </Link>
          </div>
        </div>

        <div className="mt-4 border-b border-amber-400"></div>

        <div className="mt-8 pb-16 lg:flex justify-center mx-auto text-center">
          <p className="text-lg px-4 lg:border-r">2020 Dox Digital</p>
          <p className="text-lg px-4 lg:border-r">All Rights Reserved.</p>
          <p className="text-lg px-4 lg:border-r">Privacy Policy</p>
          <p className="text-lg px-4">Diversity Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
