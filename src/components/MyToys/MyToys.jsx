import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import ToyCard from "../ToyCard/ToyCard";
import Swal from "sweetalert2"; 

const MyToys = () => {
  const { user, myToys, removeFromMyToys } = useContext(AuthContext);

  useEffect(() => {
    document.title = "ToyTopia | My Toys";
  }, []);

  const handleRemove = (id, name) => {
    Swal.fire({
      title: "Remove from collection?",
      text: `Are you sure you want to remove ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff4d4d",
      cancelButtonColor: "#10182b",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromMyToys(id);
        Swal.fire({
          title: "Removed!",
          text: "The toy has been removed from your list.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-[60vh]">
      <h2 className="text-3xl font-black text-center mb-8">
        My <span className="text-[#ff4d4d]">Collections</span>
      </h2>

      {myToys.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {myToys.map((toy) => (
            <div key={toy.toyId} className="relative group">
              <ToyCard toy={toy} />
              <button
                onClick={() => handleRemove(toy.toyId, toy.toyName)}
                className="absolute top-4 right-4 bg-white/90 text-red-600 p-2 rounded-full 
                           shadow-lg hover:bg-red-600 hover:text-white transition-all 
                           md:opacity-0 md:group-hover:opacity-100"
                title="Remove Toy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-dashed border-slate-300 rounded-lg p-12 text-center">
          <p className="text-slate-500 font-medium mb-8">
            Hello {user?.displayName}, you haven't added any toys to your
            collection yet.
          </p>
          <Link
            to={"/"}
            className="mt-4 px-8 py-3 bg-[#ff4d4d] text-black hover:bg-white hover:text-[#ff4d4d] hover:border hover:border-[#ff4d4d] rounded-sm font-bold transition-all"
          >
            Add New Toy
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyToys;
