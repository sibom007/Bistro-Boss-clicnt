import React from 'react';

const Foodcard = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-[424px] h-[300px] relative' src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mt-3 mr-3 bg-slate-800 text-white p-2 rounded'>${price}</p>
                <div className="card-body flex flex-col items-center">

                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn  border-0 border-b-4 border-yellow-500 text-yellow-500 bg-white hover:bg-slate-500">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;