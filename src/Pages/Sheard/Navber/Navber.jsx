import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { MyAuthcontext } from '../../../Routes/Provider/Authprovider';
import usecard from '../../../Hooks/usecard';

const Navber = () => {

    const { user, Logout } = useContext(MyAuthcontext)
    const [cart] =usecard()

    const handlerLogout = () => {
        Logout()
    }

    const Navoptation = <div className='flex items-center space-x-4' >
        <Link to="/"><li>Home</li></Link>
        <Link to='/Manu'><button><li>Our Menu</li></button></Link>
        <Link to='/order'><li>Our Shop</li></Link>
        <Link><li>
            <button className="btn bg-[#89b5fa] hover:bg-[#89b5fa] gap-2">
                <FaShoppingCart />
                <div className="badge bg-zinc-200 text-black">+{cart ?.length || 0}</div>
            </button>
        </li></Link>
        <li>Dashboard</li>
        {
            user ? <><button className='btn btn-outline btn-info btn-xs' onClick={handlerLogout}>Logout</button></> : <> <Link to={'/Login'}><li>Login</li></Link></>
        }
        <img src="" alt="" />
    </div>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl bg-[#151515] bg-opacity-30 text-white p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {Navoptation}
                        </ul>
                    </div>
                    <a className="normal-case text-xl font-bold">BISTRO BOSS <br /> Restaurant</a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        {Navoptation}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;