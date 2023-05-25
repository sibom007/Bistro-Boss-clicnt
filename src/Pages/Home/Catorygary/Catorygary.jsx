import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import sli1 from '../../../assets/assets/home/slide1.jpg'
import sli2 from '../../../assets/assets/home/slide2.jpg'
import sli3 from '../../../assets/assets/home/slide3.jpg'
import sli4 from '../../../assets/assets/home/slide4.jpg'
import sli5 from '../../../assets/assets/home/slide5.jpg'
import Sectiontitle from "../../../Component/section-title/Sectiontitle";

const Catorygary = () => {
    return (
        <div>
            <section>
                <Sectiontitle
                Subtitle={"---From 11:00am to 10:00pm---"}
                Maintitle={"ORDER ONLINE"}
                ></Sectiontitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-12 mb-24"
                >
                    <SwiperSlide><img src={sli1} alt="" /> <h3 className="text-center text-2xl uppercase text-white -mt-20">Salads</h3></SwiperSlide>
                    <SwiperSlide><img src={sli2} alt="" /><h3 className="text-center text-2xl uppercase text-white -mt-20">Soups</h3></SwiperSlide>
                    <SwiperSlide><img src={sli3} alt="" /><h3 className="text-center text-2xl uppercase text-white -mt-20">pizzas</h3></SwiperSlide>
                    <SwiperSlide><img src={sli4} alt="" /><h3 className="text-center text-2xl uppercase text-white -mt-20">desserts</h3></SwiperSlide>
                    <SwiperSlide><img src={sli5} alt="" /><h3 className="text-center text-2xl uppercase text-white -mt-20">Salads</h3></SwiperSlide>
                </Swiper>

            </section>

        </div>
    );
};

export default Catorygary;