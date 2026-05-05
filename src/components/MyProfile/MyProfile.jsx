import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, loading, updateUserInfo } = useContext(AuthContext);

  useEffect(() => {
    document.title = "ToyTopia | My Profile";
  }, []);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    // console.log("update");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserInfo(profile)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully Update Your Profile!",
          text: `Welcome to ToyTopia!`,
          showConfirmButton: false,
          timer: 2000,
        });
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
    <div className="max-w-3xl mx-auto my-12 px-6">
      <div className="bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-[#10182b] p-8 text-center">
          <div className="relative inline-block">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-[#ff4d4d] object-cover mx-auto"
            />
          </div>
          <h1 className="text-white text-2xl font-black mt-4">
            {user?.displayName || "ToyTopia Enthusiast"}
          </h1>
          <p className="text-slate-400 text-sm mt-4">{user?.email}</p>
        </div>

        {/* Update Form */}
        <div className="p-8">
          <h2 className="text-xl font-bold mb-6 text-slate-800">
            Edit Profile Details
          </h2>
          <form onSubmit={handleUpdateProfile} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className="border-b-2 w-full border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                required
                className="border-b-2 w-full border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 mt-6 rounded-lg font-semibold text-black transition-all shadow-lg ${
                loading
                  ? "bg-slate-400"
                  : "bg-[#ff4d4d] hover:bg-white hover:border hover:border-[#ff4d4d] hover:text-[#ff4d4d] shadow-red-100"
              }`}
            >
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
