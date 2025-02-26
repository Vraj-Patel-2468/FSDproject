import Logo from "../assets/Icon.png";
import Dropdown from "./Dropdown.jsx";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl px-6 py-4">
        <a
          href="http://localhost:5173/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-10" alt="Rebu Logo" />
          <span className="self-center text-3xl font-bold text-gray-900 relative">
            Rebu
            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full" />
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}