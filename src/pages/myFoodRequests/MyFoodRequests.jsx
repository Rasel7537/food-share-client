
import React, { useEffect, useState, useContext } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { authContext } from "../../provider/AuthProvider"; // context path

const MyFoodRequests = () => {
  const { user } = useContext(authContext); //   user email
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/foodRequests?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [user]);

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">My Food Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.length > 0 ? (
          requests.map((item) => (
            <div
              key={item._id}
              className="border-2 border-green-500 p-6 rounded-lg bg-white shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.foodImage}
                  alt={item.foodName}
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
                <span className="font-semibold">Pickup Location:</span>{" "}
                {item.pickupLocation}
              </p>

              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-green-600" />
                <span className="font-semibold">Expired Date:</span>{" "}
                {item.expireDate}
              </p>

              <p className="flex items-center gap-2">
                <MdDateRange className="text-green-600" />
                <span className="font-semibold">Request Date:</span>{" "}
                {new Date().toLocaleString()}
              </p>

              <button className="btn btn-success mt-4 w-full">
                CANCEL REQUEST
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No food requests found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyFoodRequests;
