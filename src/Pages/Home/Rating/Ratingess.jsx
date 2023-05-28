import Sectiontitle from '../../../Component/section-title/Sectiontitle';

import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';

const Ratingess = () => {
    const [Ratinges, setRatinges] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/rating")
            .then(res => res.json())
            .then(data => setRatinges(data))
    }, [])

    return (
        <div>
            <section className='mt-5'>
                <Sectiontitle Subtitle={"---What Our Clients Say---"} Maintitle={"TESTIMONIALS"} />


                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-5 mt-5">
                    {
                        Ratinges.map(Ratinge => <SwiperSlide key={Ratinge._id}>

                            <div className='flex flex-col items-center space-y-4 mt-5'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={Ratinge.rating}
                                    readOnly
                                />
                                <h3>{Ratinge.details}</h3>
                                <h3 className='text-2xl font-semibold text-yellow-600'>{Ratinge.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>

        </div>
    );
};

export default Ratingess;