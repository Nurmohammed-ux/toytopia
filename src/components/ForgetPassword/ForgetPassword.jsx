import { useEffect, useState } from "react";
import { useLocation } from "react-router";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  useEffect(() => {
    document.title = "ToyTopia | Forget Password";
  }, []);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire("Error", "Please provide an email address.", "error");
      return;
    }

    // sendPasswordResetEmail(auth, email)
    //   .then(() => {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Reset Link Sent!",
    //       text: "Check your email to reset your password.",
    //       showConfirmButton: false,
    //       timer: 3000,
    //     });
    //     setTimeout(() => {
    //       window.location.href = "https://mail.google.com";
    //     }, 2000);
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Error",
    //       text: error.message,
    //     });
    //   });
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 shadow-2xl rounded-sm">
        <h2 className="text-3xl font-bold mb-6 text-[#10182b]">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border-b-2 border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#ff4d4d] hover:text-[#ff4d4d] text-black font-bold hover:bg-white hover:border-[#ff4d4d] border border-transparent transition-all"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
