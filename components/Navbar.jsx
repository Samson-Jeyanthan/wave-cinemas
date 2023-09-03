import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="grid place-items-center p-8 sticky top-0 z-50 bg-transparent">
      <div className="flex justify-between max-w-[1600px] w-full">
        <div className="flex gap-8 items-center">
          <Link href="#">WAVE</Link>
          <Link href="#">All movies</Link>
        </div>
        <div className="flex gap-8 text-white text-xl">
          <p>
            <BsSearch />
          </p>
          <p>
            <RiMenu3Fill />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
