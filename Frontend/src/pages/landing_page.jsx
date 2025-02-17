import { useState } from "react";
import { DatePicker } from '@mantine/dates';
import { FaLocationArrow, FaClock } from "react-icons/fa";

export default function Landing_page() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [time, setTime] = useState("Now");
  const [value, setValue] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl font-bold text-blue">Go anywhere with <br /> RebU</h1>
        <div className="mt-6 space-y-4">
          <div className="flex items-center bg-gray-200 p-3 rounded-lg">
            <span className="mr-3 text-black">●</span>
            <input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full bg-transparent outline-none text-black"
            />
            <FaLocationArrow className="text-gray-500" />
          </div>
          <div className="flex items-center bg-gray-200 p-3 rounded-lg">
            <span className="mr-3 text-black">■</span>
            <input
              type="text"
              placeholder="Dropoff location"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="w-full bg-transparent outline-none text-black"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center bg-gray-200 p-3 rounded-lg w-1/2">
                <DatePicker value={value} onChange={setValue} />
           </div>
            <div className="flex items-center bg-gray-200 p-3 rounded-lg w-1/2">
              <FaClock className="text-gray-500 mr-2" />
              <select
                className="bg-transparent outline-none w-full"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option>Now</option>
                <option>Later</option>
              </select>
            </div>
          </div>
          <button className="bg-black text-white p-3 rounded-lg w-full font-semibold hover:bg-gray-800">
            See prices
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Map Placeholder</p>
        </div>
      </div>
    </div>
  );
}
