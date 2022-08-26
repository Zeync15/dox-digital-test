import Link from "next/link";
import LinesEllipsis from "react-lines-ellipsis";

const NewsCard = () => {
  const lorem30 =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae esse nam temporibus tempora numquam ab minus ullam maiores quam nemo adipisci, repellat, tempore quaerat distinctio amet placeat aperiam laudantium.";

  return (
    <div className="mb-8 lg:mb-0">
      <div className="text-red-600">H6 Headline</div>
      <div className="font-thin">By Jane Doe</div>

      <img src="/300x120.png" alt="news photo" className="w-full h-fit" />

      <LinesEllipsis
        text={lorem30}
        maxLine={3}
        ellipsis={"..."}
        trimRight
        basedOn={"letters"}
        className="mt-4"
      />

      <button className="py-1 px-8 border-2 rounded-full uppercase font-medium text-red-600 border-red-600 mt-8">
        <Link href="#">button</Link>
      </button>
    </div>
  );
};

export default NewsCard;
