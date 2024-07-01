import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import UserProfile from "../Pages/Profile/UserProfile";
import Root from "../Components/Root";
import Login from "../Pages/Login&Reg/Login";
import Register from "../Pages/Login&Reg/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import Error from "../Pages/Error/Error";
import Cart from "../Pages/Cart/Cart";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/RealEstate.json')
               
            },
            {
                path:"/estates/:id",
                element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
                loader: ()=> fetch('/RealEstate.json')
            },
            {
                path:"/profile",
                element: <PrivateRoutes>
                    <UserProfile></UserProfile>
                </PrivateRoutes>
            },
            {
                path: "/update",
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: "/cart",
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: ()=> fetch('/RealEstate.json')
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/reg",
                element: <Register></Register> 
            }
           
        ]}
    ])
export default router;


