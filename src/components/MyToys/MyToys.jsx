import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "ToyTopia | My Toys";
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-[60vh]">
      <h2 className="text-3xl font-black text-center mb-8">
        My <span className="text-[#ff4d4d]">Collections</span>
      </h2>
      <div className="bg-white border border-dashed border-slate-300 rounded-lg p-12 text-center">
        <p className="text-slate-500 font-medium mb-8">
          Hello {user?.displayName}, you haven't added any toys to your
          collection yet.
        </p>
        <Link
          to={"/"}
          className="mt-4 px-8 py-3 bg-[#ff4d4d] text-black hover:bg-white hover:text-[#ff4d4d] hover:border hover:border-[#ff4d4d] rounded-sm font-bold"
        >
          Add New Toy
        </Link>
      </div>
    </div>
  );
};

export default MyToys;
