import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { authContext } from "../../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { ImEye } from "react-icons/im";
import { PiEyeClosedBold } from "react-icons/pi";

const Login = () => {
  const navigate = useNavigate();

  // googleLogin function
  const provider = new GoogleAuthProvider();

  //  Password show/hide toggle
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Congratulation",
          text: "You login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Your email or password is incorrect.",
        });
      });
  };

  // login function
  const { signIn } = use(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Congratulation",
          text: "You login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Your email or password is incorrect.",
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#2d2e32] to-[#1a1a2e] flex items-center justify-center">
        <div className="glass p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
          <h2 className="text-3xl font-bold text-center mb-6">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-white text-black"
                required
              />
            </div>

            {/* Password with eye icon */}
            <div>
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
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

            <button type="submit" className="btn btn-primary w-full mt-4">
              Login
            </button>
          </form>

          <div className="divider text-white">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-xl" /> Login with Google
          </button>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
