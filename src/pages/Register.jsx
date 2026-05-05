import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.title = "ToyTopia | Register";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.fName.value;
    const lastName = form.lName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.cPassword.value;
    // console.log(
    //   createUser,
    //   firstName,
    //   lastName,
    //   photo,
    //   email,
    //   password,
    //   confirmPassword,
    // );

    if (!(firstName && lastName && photo)) {
      Swal.fire({
        icon: "warning",
        title: "Missing Name",
        text: "Please provide your First or Last name or Photo",
        confirmButtonColor: "#ff4d4d",
      });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long and contain both uppercase and lowercase letters.",
        confirmButtonColor: "#ff4d4d",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Mismatch",
        text: "Passwords do not match",
        confirmButtonColor: "#ff4d4d",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: `Welcome to ToyTopia, ${firstName}!`,
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          confirmButtonColor: "#ff4d4d",
        });
      });
  };

  return (
    <div className="card bg-base-100 mx-auto border border-gray-300 w-full max-w-lg px-6 md:px-14 py-9 shadow-2xl rounded-sm">
      <div className="card-body">
        <h1 className="text-3xl font-bold mb-6">Create an account</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col space-y-6">
            {/* Name */}
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              required
              className="border-b-2 border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
            />
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              required
              className="border-b-2 border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
            />
            {/*Photo URL  */}
            <input
              type="text"
              name="photo"
              required
              placeholder="PhotoURl"
              className="border-b-2 border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
            />
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
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="cPassword"
                placeholder="Confirm Password"
                required
                className="w-full border-b-2 border-gray-400 font-medium focus:outline-none py-2 bg-transparent pr-10"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="mt-4 px-7 py-3 rounded-sm bg-[#ff4d4d] 
                         hover:bg-white hover:border hover:border-[#ff4d4d] 
                         text-black font-bold transition-all"
            >
              Create an account
            </button>
          </fieldset>
          <p className="text-center py-4">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="text-[#ff4d4d] underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
