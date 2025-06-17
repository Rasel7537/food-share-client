import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { authContext } from "../../provider/AuthProvider";
import userIcon from "../../assets/userIcon.jpg";
import { Link, NavLink } from "react-router"; 
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "You have been logged out.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // Common navlink class with active & hover styles
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 border-b-2 border-red-500 pb-1"
      : "hover:text-red-400 hover:border-b-2 hover:border-red-300 pb-1";

  return (
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="navbar mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white/90 rounded-box w-52 gap-3"
            >
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/availableFoods" className={navLinkClass}>
                Available Foods
              </NavLink>
              <NavLink to="/addFood" className={navLinkClass}>
                Add Food
              </NavLink>
              <NavLink to="/manageFoods" className={navLinkClass}>
                Manage My Foods
              </NavLink>
              <NavLink
                to={user ? `/myFoodRequests/${user.email}` : "/login"}
                className={navLinkClass}
              >
                My Food Requests
              </NavLink>
            </ul>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-14" src={logo} />
            <a className="btn btn-ghost text-xl font-bold">Food Share</a>
          </div>
        </div>

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-medium gap-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/availableFoods" className={navLinkClass}>
              Available Foods
            </NavLink>
            <NavLink to="/addFood" className={navLinkClass}>
              Add Food
            </NavLink>
            <NavLink to="/manageFoods" className={navLinkClass}>
              Manage My Foods
            </NavLink>
            <NavLink
              to={user ? `/myFoodRequests/${user.email}` : "/login"}
              className={navLinkClass}
            >
              My Food Requests
            </NavLink>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-lg"
            src={user?.photoURL || userIcon}
            alt="User"
          />
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-warning text-black"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-warning text-black">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
