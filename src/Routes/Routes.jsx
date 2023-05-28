import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Manu/Manu/Manu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Privetrout from "./Privetrout";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/Manu",
        element:<Manu />
      },
      {
        path:"/Order",
       element:<Order></Order>
      },
      {
        path:'/Login',
        element:<Login />
      },
      {
        path:'/Signin',
        element:<Signup />
      }
    ]
  },
]);

export default router;