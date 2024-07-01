import Navbar from '../../Components/Navbar/Navbar';
import { toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import { Helmet } from 'react-helmet';


export default function Register() {

    const { SignUp, user, editProfile } = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()


    const handleRegister = (e) => {
        e.preventDefault();



        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'), form.get('password'))
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const url = form.get('url')

        const validPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!validPass.test(password)) {
            if (password.length < 6) {
                toast("Password must be at least 6 characters long.");
            } else if (!/(?=.*[a-z])/.test(password)) {
                toast("Password must contain at least one lowercase letter.");
            } else if (!/(?=.*[A-Z])/.test(password)) {
                toast("Password must contain at least one uppercase letter.");
            }
        }
        else {
            SignUp(email, password, name)
                .then(result => {
                    console.log(result)
                    //   toast.success("You have successfully created an Account")
                    swal("You have successfully created an Account")

                        .then(() => {
                            editProfile(name, url)
                                .then(() => {
                                    console.log("Profile Updated Successfully")
                                })
                                .catch(error => {
                                    toast('Sorry! Something wrong occured while updateing username or photo URL')
                                    console.log(error)

                                })
                                .then(() => {
                                    Navigate(location?.state ? location.state : '/')

                                })
                        })


                })
                .catch(error => { console.log(error) })

        }
    }


    console.log(user)




    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className='flex-grow'>
                <Navbar></Navbar>
                <div >
                    <div className=" lg:p-14 h-[68vh]">
                        <div className="mx-auto p-8 bg-slate-100 shadow-lg  lg:w-1/4">
                        <div className="flex justify-center items-center">
                            <h1 className="text-black font-bold text-2xl">Register</h1>
                        </div>
                            <form className="mt-8 space-y-6 mx-auto" onSubmit={handleRegister}>
                                <div className="flex flex-col space-y-5">
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        className="appearance-none rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your name"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                    <input
                                        type="url"
                                        name="url"
                                        autoComplete="url"
                                        className="appearance-none rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Photo URL"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-r-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className='flex items-center gap-2'> <input type='checkbox' required /> <h1>Accept Terms and conditions.</h1></div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                                <h2>Already have an account? <Link to="/Login" className="text-blue-500 font-bold">LOGIN</Link></h2>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex-none'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}
