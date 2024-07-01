import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import EstateCardHolder from "../../Components/RealEstateCards/EstateCardHolder";

import Slider from "../../Components/Slider/Slider";
import SliderText from "../../Components/Slider/SliderText";
import About from "../../Components/About/About";
import OpenStreet from "../../Components/Map/OpenStreet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Serene Stay Estate</title>
            </Helmet>
            <div className="relative ">
                <div className="absolute z-20 w-full">
                    <Navbar></Navbar>
                </div>
                <div className="absolute z-10 bg-black w-1/2 top-16 lg:top-[35vh] left-5 lg:left-20 bg-opacity-60 lg:flex justify-left items-center rounded-xl lg:rounded-none p-2 hidden">
                    <SliderText></SliderText>
                </div>
               
                <div className="relative ">
                    <Slider></Slider>
                </div>
                <div className="relative bg-[#070F2B] py-5 lg:hidden">
                    <SliderText></SliderText>
                </div>
            </div>
            <EstateCardHolder></EstateCardHolder>
            <div className="p-5 lg:p-20 bg-[#070F2B]">
            <About></About>
            <OpenStreet></OpenStreet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;