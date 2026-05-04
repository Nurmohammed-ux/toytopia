import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Successfully Log In!",
          text: `Welcome to ToyTopia!`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location.state || "/");
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          confirmButtonColor: "#ff4d4d",
        });
      });
  };

  return (
    <div className="card mx-auto mt-10 bg-base-100 border border-gray-300 w-full max-w-lg px-6 md:px-14 py-9 shadow-2xl rounded-sm">
      <div className="card-body">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="flex flex-col space-y-6">
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Username or Email"
              className="border-b-2 border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
            />
            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="w-full border-b-2 border-gray-400 font-medium focus:outline-none py-2 bg-transparent pr-10"
              />

              {/* Toggle Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Checkbox + Forgot */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between text-base font-medium mt-2">
              {/* Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  name="rememberMe"
                  type="checkbox"
                  className="text-[#ff4d4d]"
                />
                Remember Me
              </label>
              {/* Forgot Password */}
              <Link className="text-[#ff4d4d] underline">Forgot Password?</Link>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="mt-4 px-7 py-3 rounded-sm bg-[#ff4d4d] 
                         hover:bg-white hover:border hover:border-[#ff4d4d] 
                         text-black font-bold transition-all"
            >
              Login
            </button>
          </fieldset>
          <p className="text-center py-4">
            Don't have an account?{" "}
            <Link to={"/auth/register"} className="text-[#ff4d4d] underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
