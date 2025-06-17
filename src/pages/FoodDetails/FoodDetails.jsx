
import React, { useContext } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBox } from "react-icons/fa";
import { Link, useLoaderData, useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { authContext } from "../../provider/AuthProvider"; // ✅ added

const FoodDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(authContext); // ✅ added

  const singleFood = data.find((food) => food._id === id);

  if (!singleFood) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl">
        Food not found with ID: {id}
      </div>
    );
  }

  const {
    foodName,
    foodImage,
    foodQuantity,
    expireDate,
    pickupLocation,
    additionalNote,
    donatorImage,
    donatorName,
    donatorEmail,
  } = singleFood;

  const handleRequest = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to request this food?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, request it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const requestData = {
          foodId: singleFood._id,
          foodName: singleFood.foodName,
          foodImage: singleFood.foodImage,
          donatorName: singleFood.donatorName,
          donatorEmail: singleFood.donatorEmail,
          donatorImage: singleFood.donatorImage,
          pickupLocation: singleFood.pickupLocation,
          expireDate: singleFood.expireDate,
          requesterName: user?.displayName,
          requesterEmail: user?.email,
          requestDate: new Date().toISOString(),
        };

        fetch("http://localhost:3000/foodRequests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestData)
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId || data.acknowledged) {
              Swal.fire({
                title: 'Requested!',
                text: 'Your food request has been submitted.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
              });
              navigate(`/myFoodRequests/${user?.email}`);
            } else {
              Swal.fire("Oops!", "Something went wrong!", "error");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error", "Failed to send request.", "error");
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-200 p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col lg:flex-row gap-6">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={foodImage}
            alt={foodName}
            className="rounded-lg shadow-md object-cover w-full h-64 lg:h-full"
          />
        </div>

        {/* Right side: All Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{foodName}</h2>
          <p className="flex items-center text-gray-600 gap-2">
            <FaBox className="text-green-600" />
            <span className="font-semibold">Quantity:</span> {foodQuantity}
          </p>
          <p className="flex items-center text-gray-600 gap-2">
            <FaMapMarkerAlt className="text-green-600" />
            <span className="font-semibold">Pickup Location:</span> {pickupLocation}
          </p>
          <p className="flex items-center text-gray-600 gap-2">
            <FaCalendarAlt className="text-green-600" />
            <span className="font-semibold">Expire Date:</span> {expireDate}
          </p>

          <p className="text-gray-700">{additionalNote}</p>

          <div className="mt-4 flex items-center gap-4">
            <img
              src={donatorImage}
              alt={donatorName}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">Donator:</h3>
              <p className="text-md font-semibold">{donatorName}</p>
              <p className="text-sm text-gray-600">{donatorEmail}</p>
            </div>
          </div>

          {/* SweetAlert Button */}
          <button onClick={handleRequest} className="btn btn-success mt-4 w-full lg:w-auto">
            REQUEST FOOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
