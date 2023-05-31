import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendar, FaWallet, FaStar, FaBookmark, FaShoppingCart, FaUtensils, FaUser, } from 'react-icons/fa';
import usecard from '../../Hooks/usecard';
import useAdmin from '../../Hooks/useAdmin';


const Dashbord = () => {
    const [cart] = usecard()
    const [isAdmin] = useAdmin()
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

                        {
                            isAdmin ? <>
                                <li><NavLink to={'/dashbord/Admin'}> <FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashbord/Additem'}><FaUtensils />  add items</NavLink></li>
                                <li><NavLink to={'/dashbord/manageitems'}><FaWallet />manage items</NavLink></li>
                                <li><NavLink to={'/dashbord/managebookings'}><FaBookmark /> Manage bookings  <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div></NavLink></li>
                                <li><NavLink to={'/dashbord/Alluser'}> <FaUser /> all users</NavLink></li>

                            </>
                                :
                                <>
                                    <li><NavLink to={'/'}> <FaHome /> User Home</NavLink></li>
                                    <li><NavLink to={'/'}><FaCalendar />  Reservation</NavLink></li>
                                    <li><NavLink to={'/'}><FaWallet />  Payment Ristory</NavLink></li>
                                    <li><NavLink to={'/dashbord/mycart'}><FaShoppingCart />  my cart  <div className="badge bg-zinc-200 text-black">+{cart?.length || 0}</div></NavLink></li>
                                    <li><NavLink to={'/'}> <FaStar /> add review</NavLink></li>
                                    <li><NavLink to={'/'}><FaBookmark /> my booking</NavLink></li>
                                    {/* <li><NavLink to={'/dashbord/Alluser'}> <FaUser /> all users</NavLink></li> */}

                                </>
                        }





                        <div className="divider"></div>



                        <li><NavLink to={'/'}><FaHome /> Home</NavLink></li>
                        <li><NavLink to={'/order'}>Manu</NavLink></li>
                        <li><NavLink to={'/'}><FaBookmark />Shop</NavLink></li>
                        <li><NavLink to={'/'}><FaBookmark />Contact</NavLink></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;