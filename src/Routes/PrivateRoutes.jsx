import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate,useLocation } from "react-router-dom"




// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation ()
    // console.log(location)


    if(loading){
        return <div className="h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>

    }

    if(user){
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;