import { useParams, useLoaderData } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { RiHotelFill } from "react-icons/ri";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";



const EstateDetails = () => {
    const { addItem } = useContext(AuthContext)
    const { id } = useParams();
    const estates = useLoaderData();
    const selected = estates.find(estate => estate.id === id)
    // console.log(selected)
    const { estate_title, image, segment_name, description, price, area, facilities, location, status } = selected;



    const handleBooking = () => {
        addItem(id)
    }

    return (
        <div>
            <Helmet>
                <title>{estate_title}</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="lg:mx-20 mb-10 p-5">
                <img className="lg:w-3/5  rounded-2xl" src={image} alt={estate_title} />
                <div className="lg:w-3/5 mx-auto space-y-2">
                    <h1 className="font-bold text-2xl my-2">{estate_title}</h1>
                    <p className="text-gray-700 text-base mb-2 flex items-center gap-2"><RiHotelFill /> {segment_name}</p>
                    <h1>For: <span>{status}</span></h1>

                    <div className="flex gap-2 flex-col w-fit lg:flex-row ">
                        {
                            facilities.map((facility, idx) =>
                                <h1 key={idx} className="bg-[#9290C3] bg-opacity-30 rounded-full px-2 uppercase">#{facility}</h1>
                            )
                        }
                    </div>
                    <p className="text-gray-700 text-base mb-2 flex items-center gap-2"><FaMapLocationDot />{location}</p>
                    <p className="text-gray-700 text-base mb-2">Area: {area}</p>
                    <p className="text-gray-700 text-base mb-2 flex items-center gap-2 "><IoIosPricetags className="text-green-500" />
                        {price}</p>

                    <p className="text-black text-base mb-2 text-justify px-5">{description}</p>
                    <div className="flex justify-center mt-10">
                        <button onClick={handleBooking} className="btn btn-outline">Book Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EstateDetails;