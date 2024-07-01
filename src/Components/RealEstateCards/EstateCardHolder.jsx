import {useLoaderData} from "react-router-dom";
import EstateCards from "./EstateCards";


const EstateCardHolder = () => {
    const estates = useLoaderData()
    return (
        <div id="cards" className="bg-[#070F2B] p-2 lg:p-20">
            <h1 className="text-center font-bold lg:text-3xl py-5 text-white">A pleasent vacation is guranteed with us.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {
                estates.map(estate => 
                <EstateCards 
                key={estate.id}
                estate={estate}
                >
                </EstateCards>)
            }
        </div>
        </div>
    );
};

export default EstateCardHolder;