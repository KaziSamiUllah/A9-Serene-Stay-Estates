import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Aos from "aos";
import 'aos/dist/aos.css'



const UserProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    console.log(user.displayName)
    console.log(user.photoURL)

    Aos.init( {duration:1000})


    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>User:{user.displayName}</title>
            </Helmet>
            <div className="flex-grow">
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto  h-[67vh] flex justify-center items-center ">
                <div className=" w-fit p-10 space-y-5 text-xl font-medium bg-slate-100 rounded-2xl shadow-lg" data-aos ="zoom-in">
                    {
                        user?.photoURL ?
                            <img className="rounded-full mx-auto w-40" src={user.photoURL} alt="" />
                            :
                            <img className="rounded-full mx-auto w-40" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" />
                    }

                    <h1>User Name:{user.displayName}</h1>
                    <h1>Email: {user.email}</h1>
                </div>
            </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UserProfile;