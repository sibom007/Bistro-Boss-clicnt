import React from 'react';
import Sectiontitle from '../../../Component/section-title/Sectiontitle';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';


const img_hosting_token = import.meta.env.VITE_IMEGE_KEY



const Additems = () => {
    const { register, handleSubmit,reset } = useForm();
    const [axiosSecure] = useAxiosSecure()

    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onsubmit = (data) => {
        console.log(data);
        const fromData = new FormData();
        fromData.append('image', data.image[0])


        fetch(img_hosting_url, {
            method: "POST",
            body: fromData
        })
            .then(res => res.json())
            .then(imgrespond => {
                const imgurl = imgrespond.data.display_url;
                const { Catogary, name, image, price, recipe } = data
                const Newmanu = { name, price: parseFloat(price), recipe, Catogary, image: imgurl }
                console.log(Newmanu);
                axiosSecure.post('/manu', Newmanu)
                .then(data =>{
                    console.log(data.data);
                    if (data.data.insertedId) {
                        reset()
                        Swal.fire('Any fool can use a computer')
                    }
                })


            })
    }

    return (
        <div className='w-full px-10'>
             <Helmet>
                <title>Bistro Boss | Add Manu</title>
            </Helmet>
            <Sectiontitle Subtitle={'---What s new---'} Maintitle={'ADD AN ITEM'} />
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Recapi-name" className="input input-bordered w-full " />
                </div>

                <div className='flex'>

                    <div className="form-control w-full  mr-5">
                        <label className="label">
                            <span className="label-text">Catogray</span>
                        </label>
                        <select defaultValue={'Pick One'} {...register("Catogary", { required: true })} className="select select-bordered">
                            <option disabled>Catogray</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salade</option>
                            <option>Dessert</option>
                            <option>Drink</option>
                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recapi detals</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Recapi detals"></textarea>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a file</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <div className='mt-5'>
                    <input className='btn btn-outline btn-warning ' type="submit" value="submit" />
                </div>

            </form>
        </div>
    );
};

export default Additems;