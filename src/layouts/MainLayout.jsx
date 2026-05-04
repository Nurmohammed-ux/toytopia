import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <div>
            <Footer />
        </div>
    </div>
  );
};

export default MainLayout;