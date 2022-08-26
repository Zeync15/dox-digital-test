import Image from "next/image";
import Link from "next/link";
import bigPic from "../public/1920x1080.png";

const ContentWithImage = () => {
  return (
    <div className="">
      {/* Content 1 */}
      <div className=" lg:flex lg:flex-row-reverse lg:flex-1">
        <img src="/building.jpg" className="lg:w-7/12" />

        <div className="px-4 py-8 lg:px-8 bg-gray-200">
          <div className="text-red-600 uppercase text-5xl">
            <h2 className="">h2</h2>
            <h2 className="font-bold underline underline-offset-[30px] decoration-2 decoration-amber-400">
              headline
            </h2>
          </div>
          <div className="mt-14">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, obcaecati alias fuga
              minima suscipit debitis labore illo voluptate, provident error dolore accusantium
              cumque, nisi laborum. Ea iste harum, ducimus aliquid eos accusamus quia suscipit
              voluptatibus, fugit veniam laudantium omnis at in sint corporis commodi doloremque
              accusantium esse! Eaque, officiis? Laboriosam qui possimus exercitationem minus vero
              blanditiis cum debitis voluptates! Quo consequatur enim quas veritatis explicabo ipsam
              dolorem perferendis autem soluta, a excepturi praesentium laborum mollitia quibusdam
              neque labore repellendus repudiandae reprehenderit nemo! Aperiam quo nihil non ab iste
              consequatur voluptatum recusandae ea quis omnis? Corrupti autem eveniet accusantium
              voluptas at.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius non sequi
              ratione nihil pariatur exercitationem? Modi nam voluptas, impedit atque omnis
              exercitationem facere labore fuga quidem voluptatem quo. In, aut! Distinctio, incidunt
              labore id ipsum aliquam quod quos et placeat praesentium odio nostrum, illo adipisci,
              animi soluta! Amet, molestias.
            </p>

            <div className="mt-4">
              <button className="py-1 px-12 border-2  rounded-full uppercase font-medium text-red-600 border-red-600">
                <Link href="#">button</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content 2 */}
      <div className="lg:flex">
        <img src="/human.jpg" className="lg:w-7/12" />

        <div className="px-4 py-8 lg:px-8 bg-red-600">
          <div className="text-white uppercase text-5xl">
            <h2 className="">h2</h2>
            <h2 className="font-bold underline underline-offset-[30px] decoration-2 decoration-amber-400">
              headline
            </h2>
          </div>
          <div className="mt-14 text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, obcaecati alias fuga
              minima suscipit debitis labore illo voluptate, provident error dolore accusantium
              cumque, nisi laborum. Ea iste harum, ducimus aliquid eos accusamus quia suscipit
              voluptatibus, fugit veniam laudantium omnis at in sint corporis commodi doloremque
              accusantium esse! Eaque, officiis? Laboriosam qui possimus exercitationem minus vero
              blanditiis cum debitis voluptates! Quo consequatur enim quas veritatis explicabo ipsam
              dolorem perferendis autem soluta, a excepturi praesentium laborum mollitia quibusdam
              neque labore repellendus repudiandae reprehenderit nemo! Aperiam quo nihil non ab iste
              consequatur voluptatum recusandae ea quis omnis? Corrupti autem eveniet accusantium
              voluptas at.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius non sequi
              ratione nihil pariatur exercitationem? Modi nam voluptas, impedit atque omnis
              exercitationem facere labore fuga quidem voluptatem quo. In, aut! Distinctio, incidunt
              labore id ipsum aliquam quod quos et placeat praesentium odio nostrum, illo adipisci,
              animi soluta! Amet, molestias.
            </p>

            <div className="mt-4">
              <button className="py-1 px-12 border-2 rounded-full uppercase font-medium text-white border-white">
                <Link href="#">button</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWithImage;
