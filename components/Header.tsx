import Image from "next/image";
function Header() {
  return (
    <header>
      {/* Left Side */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          alt="Netflix Profile"
          className="cursor-pointer object-contain"
        />
        <ul>
          <li className="linkOfHeader">Home</li>
          <li className="linkOfHeader">TV Shows</li>
          <li className="linkOfHeader">Movies</li>
          <li className="linkOfHeader">New & Popular</li>
          <li className="linkOfHeader">My List</li>
        </ul>
      </div>
      {/* Right Side */}
      <div></div>
    </header>
  );
}

export default Header;
