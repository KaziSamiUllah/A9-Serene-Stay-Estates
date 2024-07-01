import { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Cart = () => {

    const { cartsItems } = useContext(AuthContext)
    const estates = useLoaderData();
    const selected = estates.filter(estate => cartsItems.includes(estate.id));
    console.log(selected)


    return (
        <div>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="w-4/5 mx-auto flex-col space-y-5 py-5">
                {
                    selected.map(estate =>
                        <div key={estate.id} className="grid grid-cols-1 lg:grid-cols-3 border-2 p-5 gap-5 rounded-2xl bg-[#9290C3] bg-opacity-20">
                            <div >
                                <img className="rounded-2xl" src={estate.image} alt="" />
                            </div>
                            <div className="">
                                <h1 className="font-bold">{estate.estate_title}</h1>
                                <h1>{estate.area}</h1>
                                <h1>{estate.location}</h1>
                                <h1>{estate.price}</h1>

                            </div>
                            <div className=" flex justify-center lg:justify-end items-center">
                                <Link to={`/estates/${estate.id}`}>


                                    <button className="btn-ghost bg-slate-300 px-2 rounded-2xl h-10">Show Details</button>
                                </Link>
                            </div>

                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default Cart;