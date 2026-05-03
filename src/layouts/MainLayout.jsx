import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default MainLayout;