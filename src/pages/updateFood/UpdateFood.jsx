
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateFood = () => {
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
  } = useLoaderData();

  const navigate = useNavigate();  //  useNavigate 

  const handleUpdateFood = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateFood = Object.fromEntries(formData.entries());
    console.log(updateFood);

    // send updateFood to the DB
    fetch(`http://localhost:3000/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Food has been updated successfully.. ",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");  
        }
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#0f2027] to-[#203a43] py-10 px-4">
        <form
          onSubmit={handleUpdateFood}
          className="max-w-4xl mx-auto glass p-10 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            UPDATE YOUR FOOD
          </h2>

          {/* Food Information */}
          <div>
            <h3 className="text-xl font-semibold border-b mb-4 pb-1">
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
                  placeholder="Enter food image"
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
                  defaultValue={expireDate}
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
                  required
                />
              </fieldset>
            </div>

            {/* Additional Note */}
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
            <h3 className="text-xl font-semibold border-b mb-4 pb-1">
              DONATOR INFORMATION
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <fieldset>
                <label className="label text-white">Donator Image</label>
                <input
                  type="text"
                  name="donatorImage"
                  defaultValue={donatorImage}
                  placeholder="Donator Image"
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
                    placeholder="Donator Name"
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
                    placeholder="Donator Email"
                    className="input input-bordered w-full"
                    required
                  />
                </fieldset>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full mt-4">UPDATE FOOD</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;

