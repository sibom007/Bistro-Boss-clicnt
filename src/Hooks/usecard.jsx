import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { MyAuthcontext } from '../Routes/Provider/Authprovider';
import useAxiosSecure from './useAxiosSecure';





const usecard = () => {
    const { user, loading } = useContext(MyAuthcontext);
    const token = localStorage.getItem('access-token');
  const [axiosSecure] =useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({

        // if(loading) {
        //     <progress className="progress progress-accent w-56" value="40" max="100"></progress>
        // }
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            
            return res.data;
        },

    })
    return [cart, refetch]
}
export default usecard