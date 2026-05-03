import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, picture, price, rating, availableQuantity } = toy;
  return (
    <div className="border text-center border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={picture}
        className="h-60 w-full border border-gray-100 object-fit rounded"
      />

      <h3 className="text-lg font-bold mt-3">{toyName}</h3>

      <p className="text-base font-medium pt-2">Price: ${price}</p>

      <div className="flex justify-center py-2 items-center gap-1">
        {/* Create an array of 5 and map through it */}
        {[...Array(5)].map((_, index) => {
          const starNumber = index + 1;
          return (
            <span key={index}>
              {starNumber <= Math.floor(rating) ? (
                <FaStar className="text-[#F9A51A]" size={16} />
              ) : (
                <CiStar className="text-gray-400" size={16} />
              )}
            </span>
          );
        })}
      </div>

      <p className="text-base text-gray-700 font-medium">Available : {availableQuantity}</p>

      <Link
        to={`/toy/${toyId}`}
        className="block text-center mt-5 w-full bg-[#F9A51A] py-2 rounded font-semibold"
      >
        View More
      </Link>
    </div>
  );
};

export default ToyCard;
