import ecccoLogo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-evenly bg-[#121212] text-white py-8">
      <img src={ecccoLogo} alt="logo" className="h-10" />

      <ul className="flex gap-12 text-white">
        <li className="hover:text-gray-400 cursor-pointer">Teclados</li>
        <li className="hover:text-gray-400 cursor-pointer">Mouse</li>
        <li className="hover:text-gray-400 cursor-pointer">Auriculares</li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
