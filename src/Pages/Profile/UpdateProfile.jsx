import { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {

    const { user, editProfile } = useContext(AuthContext)



    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const url = form.get('url')
        editProfile(name, url)
    }





    return (
        <div className="flex flex-col min-h-screen">
             <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="flex-grow"> 
            <Navbar></Navbar>
            <form className="mx-5 mt-8 space-y-6 lg:w-1/5 lg:mx-auto" onSubmit={handleUpdateProfile}>
                <div className="flex flex-col space-y-5">
                    <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder={user.displayName}
                    />
                    <input
                        type="url"
                        name="url"
                        autoComplete="url"
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder={user.photoURL? user.photoURL : 'Enter Photo URL here'}
                    />
                    <input
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Update
                </button>
            </form>
            </div>
            <div className="flex-none">
               <Footer></Footer>
            </div>
        </div>
    );
};

export default UpdateProfile;