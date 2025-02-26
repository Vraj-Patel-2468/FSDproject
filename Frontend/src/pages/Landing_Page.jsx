import Navbar from "../components/Navbar.jsx";

export default function Landing_page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-8 font-sans">
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Go anywhere with <br />
            <span className="text-blue-600">RebU</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your reliable ride-hailing service. Fast, safe, and affordable.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-md">
            See prices
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center shadow-lg">
            <p className="text-gray-500 text-lg">Map Placeholder</p>
          </div>
        </div>
      </div>
    </>
  );
}