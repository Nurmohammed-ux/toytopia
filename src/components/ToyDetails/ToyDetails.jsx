import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ToyDetails = () => {
  const toys = useLoaderData(); // Assuming you use a loader to fetch toy data
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const numId = Number(id);

  const toy = toys.find((t) => t.toyId === numId);
  const {
    toyName,
    picture,
    price,
    description,
    sellerName,
    rating,
    availableQuantity,
  } = toy;
  //   console.log(toy, numId)

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Request Sent!",
      text: `We've received your request to try ${toyName}. Check your email soon!`,
      confirmButtonColor: "#ff4d4d",
    });
    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6 lg:py-12">
      <div className="flex flex-col gap-12 items-center">
        {/* Toy Info */}
        <div>
          <img
            src={picture}
            alt={toyName}
            className="rounded-lg shadow-2xl w-full object-cover md:h-150"
          />
          <div>
            <h1 className="text-4xl font-black mt-8 mb-6 text-slate-900">
              {toyName}
            </h1>
            <p className="text-xl text-[#ff4d4d] font-bold mt-2">
              Price : ${price}
            </p>
            <p className="text-xl font-medium mt-2">Ratings : {rating}</p>
            <p className="text-xl font-medium mt-2">
              Available : {availableQuantity} piece
            </p>
            <p className="text-xl font-medium mt-2">
              Manufacturer : {sellerName}
            </p>
            <p className="text-slate-700 mt-4 font-normal leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Try Now Form */}
        <div className="w-full lg:px-40">
          <div className="bg-slate-50 p-12 rounded-sm w-full border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
              Try This Toy at Home
            </h2>
            <form onSubmit={handleTryNow} className="space-y-4">
              <div>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  required
                  placeholder="Your Name"
                  className="border-b-2 w-full border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="border-b-2 w-full border-gray-400 font-medium focus:outline-none py-2 bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-4 text-xl hover:border hover:border-[#ff4d4d] bg-[#ff4d4d] text-black font-black rounded-xl hover:bg-white transition-all shadow-lg"
              >
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
