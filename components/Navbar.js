import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNestedLink2, setShowNestedLink2] = useState(false);
  const [showNestedLink3, setShowNestedLink3] = useState(false);

  return (
    <div>
      <div className="absolute w-full flex justify-between py-3 hover:bg-red-600">
        <div className="ml-10 lg:ml-20">
          <img
            src="/300x120.png"
            alt="Small logo"
            width="150"
            height="60"
            className="cursor-pointer"
          />
        </div>
        <ul className="hidden lg:flex max-w-[720px] md:mr-20 items-center">
          <li className="ml-10 p-1 text-white">
            <Link href="#">Link 1</Link>
          </li>
          <li className="ml-10 p-1 text-white group">
            <Link href="#">Link 2</Link>
            <div className="absolute hidden group-hover:block bg-white text-black uppercase mt-2">
              <ul className="py-2 px-4">
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  all industries
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  manufacturing
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  logistics
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  infrastructure
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  digital technology
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  life sciences
                </li>
              </ul>
            </div>
          </li>
          <li className="ml-10 p-1 text-white group">
            <Link href="#">Link 3</Link>
            <div className="absolute hidden group-hover:block bg-white text-black uppercase">
              <ul className="py-2 px-4">
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  all industries
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  manufacturing
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  logistics
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  infrastructure
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  digital technology
                </li>
                <li className="cursor-pointer border-b pb-2 mb-1 hover:border-amber-400 hover:font-bold">
                  life sciences
                </li>
              </ul>
            </div>
          </li>
          <li className="ml-10 p-1 text-white">
            <Link href="#">Link 4</Link>
          </li>
          <li className="ml-10 p-1 text-white">
            <Link href="#">Link 5</Link>
          </li>
          <li></li>

          <div className="ml-10">
            <button className="py-1 px-3 border rounded-l-full text-white">
              <Link href="#">Button 1</Link>
            </button>

            <button className="py-1 px-3 border rounded-r-full text-white">
              <Link href="#">Button 2</Link>
            </button>
          </div>
        </ul>

        <div className="lg:hidden">
          <AiOutlineMenu size={25} className="mr-8 mt-4 text-white" onClick={() => setNav(true)} />
        </div>
      </div>

      <div className={nav ? "lg:hidden fixed left-0 top-0 w-full h-screen " : ""}>
        <div
          className={nav ? "fixed left-0 top-0 w-full h-full bg-white" : "fixed left-[-100%] top-0"}
        >
          <div className="bg-red-600 py-3 px-10">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <img
                    src="/300x120.png"
                    alt="Small logo"
                    width="150"
                    height="60"
                    className="cursor-pointer "
                  />
                </a>
              </Link>
              <div onClick={() => setNav(false)} className="cursor-pointer text-white text-3xl">
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col">
            <ul className="text-xl">
              <li className="pb-6 text-red-600 font-medium">
                <a href="/" onClick={() => setNav(false)}>
                  Link 1
                </a>
              </li>

              <li className="pb-6 text-red-600">
                <div className="font-medium">
                  Link 2
                  <span
                    className="text-2xl font-bold cursor-pointer text-amber-400  ml-2"
                    onClick={() => setShowNestedLink2(!showNestedLink2)}
                  >
                    {showNestedLink2 ? "-" : "+"}
                  </span>
                  {showNestedLink2 ? (
                    <div>
                      <div className="my-1 px-3">
                        <ul className="uppercase text-base  text-black">
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              all industries
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              manufacturing
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              logistics
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              infrastructure
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              digital technology
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              life sciences
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>

              <li className="pb-6 text-red-600">
                <div className="font-medium">
                  Link 3
                  <span
                    className="text-2xl font-bold cursor-pointer text-amber-400  ml-2"
                    onClick={() => setShowNestedLink3(!showNestedLink3)}
                  >
                    {showNestedLink3 ? "-" : "+"}
                  </span>
                  {showNestedLink3 ? (
                    <div>
                      <div className="my-1 px-3">
                        <ul className="uppercase text-base text-black">
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              all industries
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              manufacturing
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              logistics
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              infrastructure
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              digital technology
                            </a>
                          </li>
                          <li className="border-b hover:border-amber-400 hover:font-bold py-1.5">
                            <a href="/" onClick={() => setNav(false)} className="cursor-pointer">
                              life sciences
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>

              <li className="pb-6 text-red-600 font-medium">
                <a href="/" onClick={() => setNav(false)}>
                  Link 4
                </a>
              </li>

              <li className="pb-6 text-red-600 font-medium">
                <a href="/" onClick={() => setNav(false)}>
                  Link 5
                </a>
              </li>
            </ul>

            <div className=" text-blue-600 font-bold">
              <button className="py-1 px-3 border border-blue-600 rounded-l-full ">
                <Link href="#">Button 1</Link>
              </button>

              <button className="py-1 px-3 border border-blue-600 rounded-r-full ">
                <Link href="#">Button 2</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
