import { Outlet } from "react-router-dom";
import Navber from "../../Pages/Sheard/Navber/Navber";
import Footer from "../../Pages/Sheard/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;