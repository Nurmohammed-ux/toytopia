import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, picture, price, rating, availableQuantity } = toy;
  return (
    <div className="border text-center border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={picture}
        className="h-50 lg:h-80 w-full border border-gray-100 object-fit rounded"
      />
      <h3 className="text-lg font-bold mt-4">{toyName}</h3>
      <p className="text-base font-medium pt-3">Price: ${price}</p>
      <div className="flex justify-center py-3 items-center gap-1">
        {/* Create an array of 5 and map through it */}
        {[...Array(5)].map((_, index) => {
          const starNumber = index + 1;
          return (
            <span key={index}>
              {starNumber <= Math.floor(rating) ? (
                <FaStar className="text-[#ff4d4d]" size={16} />
              ) : (
                <CiStar className="text-gray-400" size={16} />
              )}
            </span>
          );
        })}
      </div>

      <p className="text-base text-gray-700 font-medium">
        Available : {availableQuantity}
      </p>

      <Link
        to={`/toy/${toyId}`}
        className="block text-center mt-5 w-full bg-[#ff4d4d] py-2 rounded font-semibold"
      >
        View More
      </Link>
    </div>
  );
};

export default ToyCard;
