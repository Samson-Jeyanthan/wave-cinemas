import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="grid place-items-center h-[10vh] sticky top-0 z-50 bg-transparent mt-[-10vh] text-white px-8">
      <div className="flex justify-between max-w-[1600px] w-full">
        <div className="flex gap-8 items-center">
          <Link href="#">WAVE</Link>
          <Link href="#">All movies</Link>
        </div>
        <div className="flex items-center justify-center gap-8 text-3xl">
          <p className="text-2xl">
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
