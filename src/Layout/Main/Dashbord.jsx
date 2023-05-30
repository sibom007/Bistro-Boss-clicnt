import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendar, FaWallet, FaStar, FaBookmark, FaShoppingCart, } from 'react-icons/fa';
import usecard from '../../Hooks/usecard';

const Dashbord = () => {
    const [cart] = usecard()
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-center text-base-content bg-[#D1A054]">
                        <h1 className="normal-case text-xl font-bold mb-10">BISTRO BOSS <br /> Restaurant</h1>
                        <li><NavLink> <FaHome /> User Home</NavLink></li>
                        <li><NavLink><FaCalendar />  Reservation</NavLink></li>
                        <li><NavLink><FaWallet />  Payment Ristory</NavLink></li>
                        <li><NavLink to={'/dashbord/mycart'}><FaShoppingCart />  my cart  <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div></NavLink></li>
                        <li><NavLink> <FaStar /> add review</NavLink></li>
                        <li><NavLink><FaBookmark /> my booking</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome /> Home</NavLink></li>
                        <li><NavLink to={'/order'}>Manu</NavLink></li>
                        <li><NavLink><FaBookmark />Shop</NavLink></li>
                        <li><NavLink><FaBookmark />Contact</NavLink></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;