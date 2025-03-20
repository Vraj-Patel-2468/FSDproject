import React from "react";

export default function RideDetails() {
  const rides = [
    {
      pickupPoint: "Downtown Station",
      dropPoint: "Central Park",
      pickupTime: "10:30 AM",
      dropTime: "11:15 AM",
      vehicleModel: "Toyota Prius",
      price: "$25.00"
    },
    {
      pickupPoint: "City Mall",
      dropPoint: "Greenwood Avenue",
      pickupTime: "12:00 PM",
      dropTime: "12:45 PM",
      vehicleModel: "Honda Civic",
      price: "$30.00"
    },
    {
      pickupPoint: "Airport Terminal 1",
      dropPoint: "Hotel Grand",
      pickupTime: "3:15 PM",
      dropTime: "4:00 PM",
      vehicleModel: "Tesla Model 3",
      price: "$50.00"
    },
    {
      pickupPoint: "Tech Park",
      dropPoint: "Metro Station",
      pickupTime: "5:00 PM",
      dropTime: "5:35 PM",
      vehicleModel: "Ford Mustang",
      price: "$40.00"
    },
    {
      pickupPoint: "University Gate",
      dropPoint: "Library Square",
      pickupTime: "7:45 AM",
      dropTime: "8:10 AM",
      vehicleModel: "Chevrolet Bolt",
      price: "$20.00"
    }
  ];

  return (
    <div className="max-w-full mx-auto p-8 mt-10 bg-white rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Ride Details</h2>
      <table className="min-w-full text-lg text-gray-600">
      <thead>
  <tr className="bg-yellow-300 hover:bg-yellow-500 text-black px-6 py-4 rounded-lg font-semibold transition-shadow shadow-md">
    <th className="px-8 py-4 text-left">Pick-up Point</th>
    <th className="px-8 py-4 text-left">Drop Point</th>
    <th className="px-8 py-4 text-left">Pick-up Time</th>
    <th className="px-8 py-4 text-left">Drop Time</th>
    <th className="px-8 py-4 text-left">Vehicle Model</th>
    <th className="px-8 py-4 text-left">Price</th>
  </tr>
</thead>

<tbody>
  {rides.map((ride, index) => (
    <tr
      key={index}
      className={`${
        index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
      } hover:bg-gray-50`}
    >
      <td className="px-8 py-6">{ride.pickupPoint}</td>
      <td className="px-8 py-6">{ride.dropPoint}</td>
      <td className="px-8 py-6">{ride.pickupTime}</td>
      <td className="px-8 py-6">{ride.dropTime}</td>
      <td className="px-8 py-6">{ride.vehicleModel}</td>
      <td className="px-8 py-6">{ride.price}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
  
  
}
