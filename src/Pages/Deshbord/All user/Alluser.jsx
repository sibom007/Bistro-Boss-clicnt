import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Alluser = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handlerdadmin = user =>{
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:'PATCH'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if (data.modifiedCount) {
            refetch()
            Swal.fire("Admin", '', 'success')
        }
      })
    }


    const handlerdelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }




    return (
        <div className='w-full space-x-4'>
            <Helmet>
                <title>Bistro Boss | All user</title>
            </Helmet>
            <h1 className='text-3xl font-semibold ml-6 mb-2'> Total User :{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>

                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> {
                                        user.role === 'admin' ? "admin" : <button onClick={() => handlerdadmin(user)} className="btn btn-ghost btn-lg bg-orange-400 text-white hover:bg-orange-500"><FaUserShield /></button>
                                    }
                                    </td>
                                    <td><button onClick={() => handlerdelete(user._id)} className="btn btn-ghost btn-lg bg-red-500 text-white hover:bg-red-600"><FaTrash /></button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;