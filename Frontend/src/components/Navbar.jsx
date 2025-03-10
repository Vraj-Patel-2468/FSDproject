import { useState } from "react";
import Logo from "../assets/Icon.png";
import GoogleIcon from "../assets/search.png";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleSignUp = () => setIsSignUp(!isSignUp);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl px-6 py-4">
          <a href="http://localhost:5173/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-10" alt="Rebu Logo" />
            <span className="self-center text-3xl font-bold text-gray-900 relative">
              Rebu
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full" />
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              onClick={toggleModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md flex items-center gap-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 max-w-md overflow-hidden animate-pop">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">{isSignUp ? "Create Account" : "Sign In"}</h3>
              <button onClick={toggleModal} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              
              <button className="w-full mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold transition">
                {isSignUp ? "Create Account" : "Login with Email"}
              </button>

              <div className="w-full flex items-center mb-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-2 text-gray-500 text-xs font-medium">or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 text-gray-700 hover:bg-gray-100 border border-gray-300 px-4 py-2.5 rounded-lg transition">
                <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
                <span>Continue with Google</span>
              </button>
            </div>

            {/* Toggle Create Account */}
            <div className="p-4 flex justify-end">
              <button onClick={toggleSignUp} className="text-blue-600 hover:underline text-sm font-medium">
                {isSignUp ? "Already have an account? Sign In" : "Create Account"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
