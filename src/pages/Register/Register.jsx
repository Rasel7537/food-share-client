import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { authContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ImEye } from "react-icons/im";
import { PiEyeClosedBold } from "react-icons/pi";

const Register = () => {
  // Password show/hide toggle
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, setUser, updateUser } = use(authContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // Password validation
    if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one uppercase letter.",
      });
    }
    if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one lowercase letter.",
      });
    }
    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long.",
      });
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: errorMessage,
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#0f2027] to-[#203a43] flex items-center justify-center">
        <div className="glass p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
          <h2 className="text-3xl font-bold text-center mb-6">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label text-white">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full bg-white text-black"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label text-white">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-white text-black"
                required
              />
            </div>

            {/* Photo */}
            <div>
              <label className="label text-white">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full bg-white text-black"
                required
              />
            </div>

            {/* Password with eye icon */}
            <div>
              <label className="label text-white">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full bg-white text-black pr-10"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                >
                  {showPassword ? (
                    <ImEye size={20} />
                  ) : (
                    <PiEyeClosedBold size={20} />
                  )}
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Register
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
