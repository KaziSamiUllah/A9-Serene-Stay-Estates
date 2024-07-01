import { Link } from "react-router-dom";
import 'animate.css';

const SliderText = () => {
    return (
        <div className="flex flex-col lg:space-y-16 lg:p-10 animate-pulse animate-animated">
            <p className="lg:text-5xl text-white mx-auto lg:ml-10  w-11/12 md:w-full text-center lg:text-left">Welcome home to a world of comfort and luxury in our hospitality-inspired real estate enclave.</p>
            <Link className="mx-auto w-36"><button href="#cards" className="text-white btn btn-sm border-2 border-white bg-[#1B1A55] md:mx-auto w-full mt-5">Book now</button></Link>
           
            
        </div>
    );
};

export default SliderText;