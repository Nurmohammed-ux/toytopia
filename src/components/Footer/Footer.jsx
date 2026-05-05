import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#10182b] text-slate-400 pt-20 pb-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-6  md:ml-24 lg:mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Column 1: Brand & Contact */}
        <div className="lg:col-span-1">
          <div className="text-3xl font-black mb-6 flex items-center gap-1">
            <span className="text-[#ff4d4d]">
              T<span className="text-white text-2xl">❤</span>y
            </span>
            <span className="text-white">
              T<span className="text-[#ff4d4d] text-2xl">❤</span>pia
            </span>
          </div>
          <div className="space-y-4 text-sm font-medium">
            <p className="text-[#ff4d4d] hover:underline cursor-pointer transition-all">
              support@toytopia.com
            </p>
            <p className="text-white font-bold text-xl tracking-tight">
              + (1800)-88-66-99
            </p>
            <p className="leading-relaxed opacity-80">
              ToyTopia HQ, 42 Ruffin Street <br />
              Puffinville, 12345
            </p>
          </div>
          {/* Payment Badges (Pure CSS) */}
          <div className="flex gap-2 mt-8">
            {["VISA", "MASTER", "AMEX"].map((card) => (
              <div
                key={card}
                className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-[9px] font-bold text-slate-300 uppercase"
              >
                {card}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Account Links */}
        <div className="mt-4 lg:mt-0">
          <h3 className="text-white font-bold mb-6 uppercase tracking-[0.15em] text-xs">
            My Account
          </h3>
          <ul className="flex flex-col space-y-3 text-sm">
            <Link
              to={"/"}
              className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={"/my_profile"}
              className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
            >
              My Profile
            </Link>
            <Link
              to={"/auth/login"}
              className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
            >
              Register
            </Link>
            <Link
              to="/return"
              className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
            >
              Return Policy
            </Link>
          </ul>
        </div>

        {/* Column 3: Policy Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-[0.15em] text-xs">
            Policies
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "FAQs",
              "Privacy Policy",
              "Cookie Settings",
              "Shipping Info",
              "Terms of Use",
            ].map((link) => (
              <li
                key={link}
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Marketplace Services */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-[0.15em] text-xs">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Local Pickup",
              "Secure Checkout",
              "Sell Your Toys",
              "Gift Cards",
              "Buyer Protection",
            ].map((link) => (
              <li
                key={link}
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Newsletter & Social */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold mb-4 uppercase tracking-[0.15em] text-xs">
            Newsletter
          </h3>
          <p className="text-sm mb-6 leading-relaxed">
            Join the ToyTopia family for{" "}
            <span className="text-white font-bold ml-1">10% off</span> your
            first order!
          </p>

          {/* Custom Newsletter Input */}
          <form
            className="relative group mb-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3.5 px-6 rounded-full bg-white text-slate-900 text-sm font-medium outline-none border-2 border-transparent focus:border-[#ff4d4d] transition-all placeholder:text-slate-400"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 w-10 h-10 bg-[#ff4d4d] rounded-full flex items-center justify-center text-white hover:bg-red-600 shadow-md transition-colors active:scale-95">
              <FaPaperPlane size={14} />
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-slate-800 hover:bg-[#ff4d4d] rounded-lg text-white transition-all hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
        <p>© 2026 ToyTopia Platform. Built for local families with love.</p>
      </div>
    </footer>
  );
};

export default Footer;
