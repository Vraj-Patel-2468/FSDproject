import { useState } from "react";
import Logo from "../assets/Icon.png";
import AuthModal from "./AuthModal"; // Make sure to adjust the import path as needed

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <nav className="bg-black border-b border-gray-800 shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl px-6 py-4">
          <a href="http://localhost:5173/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12" alt="Rebu Logo" />
            <div className="flex flex-col">
              <span className="self-center text-3xl font-bold text-white font-serif tracking-wider">
                Rebu
              </span>
              <span className="h-1 w-16 bg-yellow-400 rounded-full mt-0.5" />
            </div>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              onClick={toggleModal}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold transition shadow-md flex items-center gap-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}