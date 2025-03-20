import { useState } from "react";
import GoogleIcon from "../assets/search.png";

export default function AuthModal({ isOpen, onClose, initialMode = "signin" }) {
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");
  const [roles, setRoles] = useState({ driver: false, passenger: false });

  const toggleSignUp = () => setIsSignUp(!isSignUp);

  const handleCheckboxChange = (role) => {
    setRoles((prevRoles) => ({
      ...prevRoles,
      [role]: !prevRoles[role],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-xl w-96 max-w-md overflow-hidden animate-pop relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{isSignUp ? "Create Account" : "Sign In"}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="Username"
                className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
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
          {isSignUp && (
            <>
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={roles.driver}
                    onChange={() => handleCheckboxChange("driver")}
                    className="mr-2"
                  />
                  Driver
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={roles.passenger}
                    onChange={() => handleCheckboxChange("passenger")}
                    className="mr-2"
                  />
                  Passenger
                </label>
              </div>
            </>
          )}
          <button className="w-full mb-4 bg-black hover:bg-gray-800 text-white px-4 py-2.5 rounded-lg font-semibold transition">
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

        <div className="p-4 flex justify-end">
          <button onClick={toggleSignUp} className="text-black hover:underline text-sm font-medium">
            {isSignUp ? "Already have an account? Sign In" : "Create Account"}
          </button>
        </div>
      </div>
    </div>
  );
}
