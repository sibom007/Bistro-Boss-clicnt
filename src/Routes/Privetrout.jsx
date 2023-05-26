import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { MyAuthcontext } from "./Provider/Authprovider";





const Privetrout = ({ children }) => {

    const { user, loading } = useContext(MyAuthcontext);

    const location = useLocation()

    if (loading) {
        return <progress className="progress progress-accent w-56" value="40" max="100"></progress>
    }

    if (user?.email) {
        return children;

    }
    return <Navigate to={'/Login'} state={{from:location}} replace />
};

export default Privetrout;