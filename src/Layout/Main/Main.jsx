import { Outlet, useLocation } from "react-router-dom";
import Navber from "../../Pages/Sheard/Navber/Navber";
import Footer from "../../Pages/Sheard/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const NoNavFooter = location.pathname.includes('Login') || location.pathname.includes('Signin')
    return (
        <div>
            {NoNavFooter || <Navber />}
            <Outlet></Outlet>
            {NoNavFooter || <Footer />}
        </div>
    );
};

export default Main;