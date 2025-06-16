import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaWeight, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const AvailableFood = () => {
  const foods = useLoaderData();
  const [searchTerm, setSearchTerm] = useState(""); //  Search input state

  //  Filter foods based on search term
  const searchedFoods = foods.filter((food) =>
    food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="my-10 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-8">
          <h3 className=" font-semibold text-lg"> Food Sharing</h3>
          <h2 className="text-3xl md:text-4xl font-bold ">
            FEATURED <span className="text-orange-400">FOOD</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            At our community food sharing website, each item brimming with the
            potential to make a difference in someone's life.
          </p>

          {/* ✅ Search Input Field */}
          <div className="mt-5">
            <input
              type="text"
              placeholder="Search food by name..."
              className="input input-bordered w-full max-w-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {searchedFoods.map((food) => (
            <div
              key={food._id}
              className="card shadow-md hover:shadow-xl transition duration-300 rounded-lg"
            >
              <figure className="h-[280px] w-full overflow-hidden">
                <img
                  src={food.foodImage}
                  alt={food.foodName}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body space-y-2">
                <h2 className="card-title text-3xl font-bold text-gray-800">
                  {food.foodName}
                </h2>
                <p className="text-sm font-bold flex items-center gap-2 text-gray-700">
                  <FaWeight className="text-green-500" /> Quantity:{" "}
                  {food.foodQuantity}
                </p>
                <p className="text-sm font-bold flex items-center gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-green-500" /> Pickup Location:{" "}
                  {food.pickupLocation}
                </p>
                <p className="text-sm font-bold flex items-center gap-2 text-gray-700">
                  <FaCalendarAlt className="text-green-500" /> Expired Date:{" "}
                  {food.expireDate}
                </p>
                <p className="text-sm text-gray-600">
                  {food.additionalNote || "No description provided."}
                </p>

                {/* Donator info */}
                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={food.donatorImage}
                    alt={food.donatorName}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-sm font-semibold">{food.donatorName}</p>
                </div>

                <div className="card-actions justify-center mt-4">
                  <Link to={`/foodDetails/${food._id}`}>
                    <button className="btn btn-success btn-sm text-white w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
