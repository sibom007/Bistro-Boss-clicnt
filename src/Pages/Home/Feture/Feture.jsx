import React from 'react';
import Sectiontitle from '../../../Component/section-title/Sectiontitle';
import featured from '../../../assets/assets/home/featured.jpg'
import './Feture.css';

const Feture = () => {
    return (
        <div>

            <section className='featured-manu bg-fixed mt-4 '>
                <Sectiontitle Subtitle={"---Check it out---"} Maintitle={"FROM OUR MENU"}></Sectiontitle>
                <div className='md:flex justify-center items-center space-x-5 mt-5 mb-24 py-10 pb-36 bg-slate-200 bg-opacity-40'>
                    <div>
                        <img className='p-6' src={featured} alt="" />

                    </div>
                    <div className=' space-y-4 text-white'>
                        <h4>March 20, 2023</h4>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4">Order Now</button>

                    </div>
                </div>




            </section>

        </div>
    );
};

export default Feture;