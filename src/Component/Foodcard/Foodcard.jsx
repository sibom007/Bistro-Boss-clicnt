import React, { useContext } from 'react';
import { MyAuthcontext } from '../../Routes/Provider/Authprovider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import usecard from '../../Hooks/usecard';

const Foodcard = ({ item }) => {
    const { name, recipe, image, price, _id } = item
    const { user } = useContext(MyAuthcontext)
    const [, refetch] = usecard()
    const navigate = useNavigate()

    const handlercard = carditem => {
        if (user && user.email) {
            const ordaritem = { manuitam: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/addcard', {
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(ordaritem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })


        }
        else {

            Swal.fire({
                title: 'Plise login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in please!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/Login")
                }
            })

        }

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-[424px] h-[300px] relative' src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mt-3 mr-3 bg-slate-800 text-white p-2 rounded'>${price}</p>
                <div className="card-body flex flex-col items-center">

                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handlercard(item)} className="btn  border-0 border-b-4 border-yellow-500 text-yellow-500 bg-white hover:bg-slate-500">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;