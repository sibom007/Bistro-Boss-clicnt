import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { MyAuthcontext } from '../../Routes/Provider/Authprovider';
import SocialLogin from '../Sheard/SocialLogin/SocialLogin';





const Signup = () => {
    const { createuser, Updateprofil } = useContext(MyAuthcontext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const Navigate = useNavigate()
    const froms = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        // Updateprofil(data.name,data.photoURL)
        createuser(data.email, data.password)
            .then(result => {
                const saveUser = { name: data.Name, email: data.email }
                Updateprofil(data.Name, data.photo)
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire("Login", '', 'success')
                    })
                Swal.fire("Login", '', 'success')
                // reset()  
                Navigate(froms, { replace: true })
            })
            .catch(error => {
                Swal.fire(error.message, ' ', 'error')
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("photo", { required: true })} placeholder="Photo url" className="input input-bordered" />
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
                                <input type="text" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])/ })} placeholder="password" className="input input-bordered" />
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
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;