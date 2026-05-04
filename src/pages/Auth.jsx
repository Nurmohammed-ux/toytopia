import { Outlet } from "react-router";
import SocialLogin from "../components/SocialLogin/SocialLogin";

const Auth = () => {
  return (
    <div className="pt-10">
      <main>
        <Outlet />
      </main>
      <div className="flex flex-row items-center gap-4 pt-6 pb-4 px-10 md:px-42 lg:px-124">
        <hr className="w-full text-gray-300" />
        <p className="text-gray-600">Or</p>
        <hr className="w-full text-gray-300" />
      </div>
      <div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Auth;
