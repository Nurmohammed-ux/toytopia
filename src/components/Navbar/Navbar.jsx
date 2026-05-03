import { Link, NavLink } from "react-router";
import { useState } from "react";
import { FaClover } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // Common link styles to keep the code clean
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/toys"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          All Toys
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-10 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
            ☰
          </button>
          {/* LOGO */}
          <Link to="/" className="text-2xl font-extrabold flex items-center">
            <span className="bg-[#F9A51A] flex items-center text-black px-2 py-1 rounded">
              T
              <span>
                <FaClover size={18} className="mt-2" />
              </span>
              y
            </span>
            <span className="text-gray-800 flex items-center">
              T
              <span>
                <FaClover size={18} className="mt-2" />
              </span>{" "}
              pia
            </span>
          </Link>
        </div>
        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks}
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hover:bg-[#F9A51A] hover:border-[#F9A51A] px-4 py-2 border border-gray-300 font-semibold rounded transition"
          >
            Login
          </Link>

          {/* <Link
            to="/register"
            className="px-5 py-2 bg-[#F9A51A] text-black font-semibold rounded hover:bg-white hover:border hover:border-[#F9A51A] transition"
          >
            Register
          </Link> */}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden mt-4 border-t border-dotted border-gray-400 pt-4">
          <ul className="flex flex-col gap-4 font-medium">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
