import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { RiHotelFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const EstateCards = ({ estate }) => {

    const { estate_title, image, id, segment_name, description, price, area, facilities, location, status } = estate;

    Aos.init()


    return (
        <div>
            <div className="w-full rounded-xl overflow-hidden hover:shadow-md hover:shadow-white mx-auto  hover:scale-105 p-2 bg-white" data-aos ="fade-out">
                <img className="h-60 w-full rounded-lg" src={image} alt={estate_title} />
                <div className="bg-white lg:h-[500px]">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{estate_title}</div>
                        <div className="flex justify-between">
                            <p className="text-gray-700 text-base mb-2 bg-green-200 rounded-full px-2"># {id}</p>
                            <p className="text-gray-700 text-base mb-2 flex items-center gap-2"><RiHotelFill /> {segment_name}</p>
                        </div>
                        <p className="text-gray-700 text-base mb-2 flex items-center gap-2"><FaMapLocationDot />{location}</p>
                        <hr />
                        <p className="text-black text-base mb-2 text-justify">Description: {description.slice(0, 150)}...</p>
                        <p className="text-gray-700 text-base mb-2 flex items-center gap-2 "><IoIosPricetags className="text-green-500" />
                            {price}</p>
                        <p className="text-gray-700 text-base mb-2 ">Status: {status}</p>
                        <p className="text-gray-700 text-base mb-2">Area: {area}</p>
                        <div className="mb-2">
                            Facilities:
                            <div className="flex flex-wrap">
                                {facilities.map((facility, idx) => (
                                    <h1 key={idx} className="bg-slate-200 rounded-full w-fit px-2 m-1">{facility}</h1>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 bg-white flex justify-center">
                    <Link to={`/estates/${id}`}><button className="bg-[#1B1A55]  hover:bg-[#535C91] text-white font-bold py-2 px-4 rounded-lg">
                        View Property
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCards;
