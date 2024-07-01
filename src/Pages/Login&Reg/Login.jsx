import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { toast } from "react-toastify";
import Footer from "../../Components/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";



const Login = () => {
    const Navigate = useNavigate()
    const { SingIn, googleAuth, GithubSignIn } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    const [showPass, setShowPass] = useState(false)
    // Password Varification///

    const toggleView = () => {
        setShowPass(!showPass)
        console.log(showPass)
    }




    // ////////////////////Login with Email & password/////////////////////
    const handleLogin = (e) => {

        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');





        SingIn(email, password)
            .then((user) => {
                Navigate(location?.state ? location.state : '/')
                toast.success("Successfully Logged in!")
                console.log(user)
            })
            .catch(() => {
                toast.warning("Something's wrong! Login Failed")
            });
    }




    ////////////////Google Login///////////////////////
    const handleGoogleLogin = () => {
        googleAuth()
        Navigate(location?.state ? location.state : '/')
    }

    const handleGitLogin = () => {
        GithubSignIn()
        Navigate(location?.state ? location.state : '/')
    }


    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>Log In</title>
            </Helmet>
            <div className="flex-grow">
                <Navbar></Navbar>
                <div className="lg:p-14 ">
                    <div className="mx-auto p-8 bg-slate-100 shadow-lg md:w-1/2 lg:w-1/4">
                        <div className="flex justify-center items-center">
                            <h1 className="text-black font-bold text-2xl">Sign In</h1>
                        </div>
                        <form className="mt-8 space-y-6 mx-auto " onSubmit={handleLogin}>
                            <div className="flex flex-col space-y-5">
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Email address"

                                />
                                <div className="flex items-center relative">
                                    <div className="absolute right-3 top-1/3" onClick={toggleView}>
                                        {!showPass ? <FaEye /> : <FaEyeSlash />}
                                    </div>
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                                        placeholder="Password"
                                    />
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                            <label> <a href="#">Forgot Password?</a></label>
                            <h2>Do not have an account? <Link to="/reg" className="text-blue-500 font-bold">REGISTER</Link></h2>
                        </form>
                        <div className='w-fit mx-auto m-5 space-y-2'>
                            <button onClick={handleGoogleLogin} className='flex items-center gap-2 p-3 border-2 rounded-xl w-48 hover:text-white hover:bg-black'><span><FaGoogle /></span>Sign In with Google</button>

                            <button onClick={handleGitLogin} className='flex items-center gap-2 border-2 rounded-xl p-3 w-48 hover:text-white hover:bg-black'><span><FaGithub /></span>Sign in with Github</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Login;