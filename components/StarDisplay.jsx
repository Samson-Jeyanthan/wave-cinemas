// "use client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarDisplay = ({ stars }) => {
  const star_ratings = Array.from({ length: 5 }, (element, index) => {
    const number = index + 1;
    return (
      <span className="text-yellow-500 text-lg" key={index}>
        {number <= stars ? <AiFillStar /> : <AiOutlineStar />}
      </span>
    );
  });

  return <div className="flex items-center gap-[2px]">{star_ratings}</div>;
};

export default StarDisplay;
