import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // Destructure 'loading' from your AuthContext
  const { user, logOut, loading } = useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#ff4d4d] font-bold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/toys"
        className={({ isActive }) =>
          isActive ? "text-[#ff4d4d] font-bold" : ""
        }
      >
        All Toys
      </NavLink>
      <NavLink
        to="/policy"
        className={({ isActive }) =>
          isActive ? "text-[#ff4d4d] font-bold" : ""
        }
      >
        Policy
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/my_profile"
            className={({ isActive }) =>
              isActive ? "text-[#ff4d4d] font-bold" : ""
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/my-toys"
            className={({ isActive }) =>
              isActive ? "text-[#ff4d4d] font-bold" : ""
            }
          >
            My Toys
          </NavLink>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully Log Out!",
          text: `Hope you will back to ToyTopia!`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
          confirmButtonColor: "#ff4d4d",
        });
      });
  };

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-10 py-6 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between">
        <div className="flex items-center gap-10">
          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
            ☰
          </button>
          <Link to="/" className="text-2xl font-extrabold flex items-center">
            <span className="bg-[#ff4d4d] flex items-center text-black px-2 py-1 rounded">
              T<span className="pt-2 text-2xl">❤</span>y
            </span>
            <span className="text-gray-800 flex items-center">
              T<span className="pt-2 text-2xl">❤</span>pia
            </span>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks}
        </ul>

        <div className="flex items-center gap-4">
          {/* Handle Loading and Persistence */}
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-gray-200 border-t-[#ff4d4d] rounded-full animate-spin"></div>
            </div>
          ) : user ? (
            <div className="flex items-center gap-6">
              {/* Profile Image with Tooltip for Name */}
              <div className="relative flex flex-col items-center group">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-[#ff4d4d] object-cover cursor-pointer"
                />
                <div className="absolute top-full mt-2 flex-col items-center hidden group-hover:flex">
                  <div className="w-3 h-3 -mb-2 rotate-45 bg-[#10182b]"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-[#10182b] shadow-lg rounded-md">
                    {user?.displayName || "User"}
                  </span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="hover:bg-[#ff4d4d] text-[#ff4d4d] hover:text-black px-4 py-2 border border-gray-300 font-semibold rounded transition"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="hover:bg-[#ff4d4d] text-[#ff4d4d] hover:text-black px-4 py-2 border border-gray-300 font-semibold rounded transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-4 border-t border-dotted border-gray-400 pt-4">
          <ul className="flex flex-col gap-4 font-medium">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
