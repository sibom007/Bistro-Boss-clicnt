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
import Dashbord from "../Layout/Main/Dashbord";
import Mycart from "../Pages/Deshbord/Mycart/Mycart";
import Alluser from "../Pages/Deshbord/All user/Alluser";
import Additems from "../Pages/Deshbord/Additems/Additems";
import Adminprivetro from "./Adminprivetrouts";
import Managesitems from "../Pages/Deshbord/Managesitem/Managesitems";
import Pemant from "../Pages/Deshbord/Pemant/Pemant";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/Manu",
        element: <Manu />
      },
      {
        path: "/Order",
        element: <Order></Order>
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Signin',
        element: <Signup />
      }
    ]
  },
  {
    path: '/dashbord',
    element: <Privetrout><Dashbord /></Privetrout>,
    children: [
      {
        path: 'mycart',
        element: <Mycart />
      },
      {
        path: 'pament',
        element: <Pemant />
      },
      {
        path: 'Alluser',
        element: <Adminprivetro><Alluser /></Adminprivetro>
      },
      {
        path: 'additem',
        element: <Adminprivetro><Additems /></Adminprivetro>
      },
      {
        path: 'manageitems',
        element: <Managesitems />
      }
    ]
  }
]);

export default router;