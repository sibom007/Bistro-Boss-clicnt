import React, { useContext } from 'react';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { MyAuthcontext } from '../../Routes/Provider/Authprovider';





const Signup = () => {
    const {createuser}=useContext(MyAuthcontext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        createuser(data.email,data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // Swal.fire("Login", '', 'success')
            // reset()
            // Navigate(from, { replace: true })

        })
        .catch(error => {
            console.log(error)
            // Swal.fire(error.message, ' ', 'error')
        })
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("Name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.Name && <span className='text-red-500'>This Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>This Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password", { required: true, minLength: 6, maxLength: 20,pattern:/(?=.*[a-z])(?=.*[A-Z])/ })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <span className='text-red-500'>This Password is required</span>}
                                {errors.password?.type === "minLength" && <span className='text-red-500'>This Password Should be 6 caracter</span>}
                                {errors.password?.type === "maxLength" && <span className='text-red-500'>This Password only 20  caracter</span>}
                                {errors.password?.type === "pattern" && <span className='text-red-500'>This Password Min 1 uppercase letter ,Min 1 lowercase letter caracter</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value={"Sign up"} />
                            </div>
                            <p>Allrady Have account <span className='text-blue-600'><Link to={"/Login"}>Login</Link></span></p>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;