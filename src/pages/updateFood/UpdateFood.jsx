

import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const food = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    expireDate,
    pickupLocation,
    additionalNote,
    donatorImage,
    donatorName,
    donatorEmail,
  } = food || {};

  const handleUpdateFood = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateFood = Object.fromEntries(formData.entries());

    // Send PUT request
    fetch(`https://food-share-server-seven.vercel.app/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your food has been updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Update failed:", err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] to-[#203a43] py-10 px-4">
      <form
        onSubmit={handleUpdateFood}
        className="max-w-4xl mx-auto glass p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          UPDATE YOUR FOOD
        </h2>

        {/* Food Information */}
        <div>
          <h3 className="text-xl font-semibold border-b mb-4 pb-1 text-white">
            FOOD INFORMATION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset>
              <label className="label text-white">Food Name</label>
              <input
                type="text"
                name="foodName"
                defaultValue={foodName}
                placeholder="Enter Food name"
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <fieldset>
              <label className="label text-white">Food Image</label>
              <input
                type="text"
                name="foodImage"
                defaultValue={foodImage}
                placeholder="Enter food image URL"
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <fieldset>
              <label className="label text-white">Food Quantity</label>
              <input
                type="text"
                name="foodQuantity"
                defaultValue={foodQuantity}
                placeholder="Enter Food Quantity"
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <fieldset>
              <label className="label text-white">Expire Date</label>
              <input
                type="date"
                name="expireDate"
                defaultValue={
                  expireDate
                    ? new Date(expireDate).toISOString().split("T")[0]
                    : ""
                }
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <fieldset>
              <label className="label text-white">Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                defaultValue={pickupLocation}
                placeholder="Enter Pickup Location"
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <fieldset>
              <label className="label text-white">Food Status</label>
              <input
                type="text"
                name="foodStatus"
                value="Available"
                disabled
                className="input input-bordered w-full bg-gray-100"
              />
            </fieldset>
          </div>

          <fieldset className="mt-4">
            <label className="label text-white">Additional Note</label>
            <textarea
              name="additionalNote"
              defaultValue={additionalNote}
              className="textarea textarea-bordered w-full"
              placeholder="Write Additional Note"
              required
            ></textarea>
          </fieldset>
        </div>

        {/* Donator Information */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold border-b mb-4 pb-1 text-white">
            DONATOR INFORMATION
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <fieldset>
              <label className="label text-white">Donator Image</label>
              <input
                type="text"
                name="donatorImage"
                defaultValue={donatorImage}
                className="input input-bordered w-full"
                required
              />
            </fieldset>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset>
                <label className="label text-white">Donator Name</label>
                <input
                  type="text"
                  name="donatorName"
                  defaultValue={donatorName}
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              <fieldset>
                <label className="label text-white">Donator Email</label>
                <input
                  type="email"
                  name="donatorEmail"
                  defaultValue={donatorEmail}
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-full mt-6">
          UPDATE FOOD
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
