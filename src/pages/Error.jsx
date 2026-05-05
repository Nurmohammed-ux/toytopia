import { useEffect } from "react";
import { Link } from "react-router";

const Error = () => {
  useEffect(() => {
    document.title = "ToyTopia | Error";
  }, []);

  return (
    <div className="min-h-210 bg-[#1d3164] flex flex-col items-center justify-center px-6 text-center">
      {/* Visual Element: Large 404 with ToyTopia Styling */}
      <div className="relative">
        <h1 className="text-48 md:text-[288px] font-black text-slate-800 leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Oops! <span className="text-[#ff4d4d]">Lost</span>
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="max-w-md mt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          This toy is missing from the shelf!
        </h2>
        <p className="text-slate-400 font-medium mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable in our toy box.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-block px-10 py-4 bg-[#ff4d4d] text-black font-black rounded-sm 
                     hover:bg-white hover:text-[#ff4d4d] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-900/20"
        >
          Back to ToyTopia
        </Link>
      </div>

      {/* Decorative Brand Accent */}
      <div className="mt-12 flex items-center gap-2 opacity-50">
        <span className="text-[#ff4d4d] font-black text-xl">Toy</span>
        <span className="text-white font-black text-xl">Topia</span>
      </div>
    </div>
  );
};

export default Error;
