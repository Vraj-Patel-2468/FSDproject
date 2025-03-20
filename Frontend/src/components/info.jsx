// import { private_createTypography } from "@mui/material"

// pick up point
// dest point
// start <time datetime="
// end time"></time>
// vhechile
// fair private_createTypography
// history
import Airport from "../assets/Airport-Fall.png";
import earner from "../assets/earner-illustra.png";
import u4b from "../assets/u4b-square.png";

export default function SplitImageQuote() {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-white py-16 px-10">
        <div className="w-2/5 flex flex-col justify-center space-y-4 p-5">
          <h1 className="text-4xl font-bold text-black">Every journey tells a story log in to relive yours and plan the next adventure.</h1>
          <p className="text-md text-gray-600">
          Access past trips, personalized recommendations, and exclusive travel insights.
          </p>
        </div>
        <div className="w-2/5 flex justify-center">
          <img src={Airport} alt="Airport Pickup" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </div>

      <div className="flex items-center justify-center w-full bg-gray-50 py-16 px-10">
        <div className="w-2/5 flex justify-center">
          <img src={earner} alt="Earner Illustration" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
        <div className="w-2/5 flex flex-col justify-center space-y-4 p-5">
          <h1 className="text-4xl font-bold text-black">Opportunities are just a ride away start earning on your own terms today</h1>
          <p className="text-md text-gray-600">
          Drive when you want, earn flexibly, and be your own boss with ease.</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full bg-white py-16 px-10">
        <div className="w-2/5 flex flex-col justify-center space-y-4 p-5">
          <h1 className="text-4xl font-bold text-black">Seamless rides, smarter solutions unlock the future of business travel now.</h1>
          <p className="text-md text-gray-600">
          Streamline employee commutes, manage expenses, and optimize travel effortlessly.</p>
        </div>
        <div className="w-2/5 flex justify-center">
          <img src={u4b} alt="Business Solutions" className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </div>
    </>
  );
}
