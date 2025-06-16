
import React from "react";
import { useLoaderData } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBill } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const MyFoodRequests = () => {
  const item = useLoaderData();

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-4">
      <div className="border-2 border-green-500 p-6 rounded-lg max-w-md w-full text-gray-800 bg-white shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={item.donatorImage}
            alt={item.donatorName}
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-bold">{item.foodName}</h2>
            <p className="text-green-600 flex items-center gap-1">
              <span className="text-sm">🟢</span> Available
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 my-4" />

        <p className="font-semibold">
          Donator: <span className="text-gray-700">{item.donatorName}</span>
        </p>
        <p className="text-sm text-gray-500 mb-2">{item.donatorEmail}</p>

        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-green-600" />
          <span className="font-semibold">Pickup Location:</span> {item.pickupLocation}
        </p>

        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-green-600" />
          <span className="font-semibold">Expired Date:</span> {item.expireDate}
        </p>

        <p className="flex items-center gap-2">
          <MdDateRange className="text-green-600" />
          <span className="font-semibold">Request Date:</span>{" "}
          {new Date().toLocaleString()}
        </p>



        <button className="btn btn-success mt-4 w-full">CANCEL REQUEST</button>
      </div>
    </div>
  );
};

export default MyFoodRequests;

