import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {

    Aos.init()

    return (
        <div className="text-white" data-aos ="fade-in">
            <h1 className="text-center font-extrabold text-3xl mb-5">About us</h1>
            <p className="text-justify mx-auto lg:w-10/12">Serene Stay Estates epitomizes the pinnacle of hospitality real estate, harmonizing opulence with tranquility to redefine the guest experience. Our properties, whether nestled in idyllic countryside or nestled within vibrant urban landscapes, are meticulously crafted havens of comfort and luxury. Committed to personalized service, our dedicated team ensures each guests unique needs are not only met but exceeded, from curated excursions to bespoke dining experiences. Beyond luxury, sustainability is at our core, with eco-friendly practices integrated seamlessly into our operations. We are deeply rooted in the communities we serve, actively contributing to local economies and supporting philanthropic initiatives. As we expand, our dedication to excellence remains unwavering. Serene Stay Estates invites guests to indulge in a world where every moment is savored, every need attended to, and every stay a testament to our commitment to creating unforgettable experiences. Welcome to Serene Stay Estates, where luxury meets serenity, and exceptional hospitality knows no bounds.</p>
        </div>
    );
};

export default About;