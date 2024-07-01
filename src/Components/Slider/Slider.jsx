import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Styles/Swiper.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full lg:h-screen"
            >
                <SwiperSlide><img className='w-full' src="https://brecknetwork.com/wp-content/uploads/2018/07/BSWinPool2-web.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-full' src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-full' src="https://cdn.stocksnap.io/img-thumbs/960w/hotel-resort_CPFJYMYEQH.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img className='w-full' src="https://cdn.stocksnap.io/img-thumbs/960w/modern-room_HNJJOEYRQG.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/208203154.jpg?k=faed696fb29f8195ab8f0d1a92716ffae23d0d9437516ea3d586000be98db951&o=&hp=1" alt="" /></SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Slider;