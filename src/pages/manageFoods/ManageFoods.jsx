import React, { useState } from "react"; //  Added useState for managing local state
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ManageFoods = () => {
  const loadedFoods = useLoaderData(); // Original loader data
  const [foods, setFoods] = useState(loadedFoods); //  Set initial data into local state

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });

              //  Remove the deleted item from local state to update UI instantly
              const remaining = foods.filter((food) => food._id !== _id);
              setFoods(remaining); //  Update state with remaining foods
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Manage Your Foods
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-center">
            {/* Table Head */}
            <thead className="bg-base-300 text-base-content">
              <tr>
                <th>No</th>
                <th>Food Name</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Expire Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {foods.map((food, index) => (
                <tr key={food._id}>
                  <th>{index + 1}</th>
                  <td>{food.foodName}</td>
                  <td>{food.foodQuantity}</td>
                  <td>{food.pickupLocation}</td>
                  <td>{food.expireDate}</td>
                  <td className="flex justify-center gap-2">
                    {/* Update Button */}
                    <Link to={`/UpdateFood/${food._id}`}>
                      <button className="btn btn-sm btn-info">
                        <FaEdit className="mr-1" /> Update
                      </button>
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="btn btn-sm btn-error"
                    >
                      <FaTrashAlt className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageFoods;
