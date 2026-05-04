import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Link } from "react-router";

const SocialLogin = () => {
  return (
    <div className="flex flex-col justify-center pb-6 md:px-42 lg:px-124">
      <Link
        className="mt-3 px-1 py-2 border border-gray-300 rounded-full flex items-center gap-8 md:gap-24 lg:gap-38
                         hover:bg-white hover:border hover:border-[#ff4d4d] 
                         text-black hover:text-[#ff4d4d] font-semibold transition-all hover:scale-105"
      >
        <FcGoogle size={28} />
        Continue with Google
      </Link>
      <Link
        className="mt-3 px-1 py-2 border border-gray-300 rounded-full  flex items-center gap-6 md:gap-22 lg:gap-36
                         hover:bg-white hover:border hover:border-[#ff4d4d] 
                         text-black hover:text-[#ff4d4d] font-semibold transition-all hover:scale-105"
      >
        <RiFacebookCircleFill size={28} fill="blue" />
        Continue with Facebook
      </Link>
    </div>
  );
};

export default SocialLogin;
