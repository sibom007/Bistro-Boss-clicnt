import { useEffect, useState, useContext } from 'react';
import bgimg from '../../assets/assets/others/authentication.png'
import Logimg from '../../assets/assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { MyAuthcontext } from '../../Routes/Provider/Authprovider';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    
    const [disabled, setdisabled] = useState(true)
    const { Login } = useContext(MyAuthcontext)
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || '/'
    // console.log(from);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handlerlogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value
        const password = from.password.value
        Login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(froms)
                Swal.fire("Login", '', 'success')
                // from.reset()            
            })
            .catch(error => {
                console.log(error)
                Swal.fire(error.message, ' ', 'error')
            })
    }

    const handlervaleded = (e) => {
        const value = e.target.value
        if (validateCaptcha(value)) {
            setdisabled(false)
        }
        else {
            setdisabled(true)
        }
    }
    return (
        <div>
            <Helmet><title>Bistro Boss | Login</title></Helmet>
            <div className="hero min-h-screen bg-base-200">

                <form onSubmit={handlerlogin} className="hero-content">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img className='bg-transparent' src={Logimg} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handlervaleded} name=' Captcha' placeholder=" Captcha" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='bg-[#D1A054] btn hover:bg-[#D1A054]' disabled={disabled} type="submit" value="Login" />
                            </div>
                            <p>Have no Account <span className='text-blue-500'><Link to={'/Signin'}>Regester</Link></span></p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;