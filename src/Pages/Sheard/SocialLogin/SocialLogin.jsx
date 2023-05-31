import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { MyAuthcontext } from '../../../Routes/Provider/Authprovider'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googlesignin } = useContext(MyAuthcontext)
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || '/'
    const handlerGooglelogin = () => {
        googlesignin()
            .then(() => {
                navigate(froms, { replace: true })
            })


    }
    return (
        <div>
            <div className="divider"></div>
            <div className='text-center'>
                <button onClick={handlerGooglelogin} className="btn btn-circle btn-outline bg-blue-300 hover:bg-blue-400 text-white">
                    <FaGoogle />
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;