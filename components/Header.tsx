import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolling && "bg-[#141414]"}`}>
      {/* Left Side */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          alt="Netflix Profile"
          className="cursor-pointer object-contain"
        />
        <ul className="hidden  space-x-4 md:flex">
          <li className="linkOfHeader">Home</li>
          <li className="linkOfHeader">TV Shows</li>
          <li className="linkOfHeader">Movies</li>
          <li className="linkOfHeader">New & Popular</li>
          <li className="linkOfHeader">My List</li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="flex items-center space-x-4 text-sm">
        <SearchIcon className="hidden h-6 w-6 sm:inline cursor-pointer" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="user profile"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
