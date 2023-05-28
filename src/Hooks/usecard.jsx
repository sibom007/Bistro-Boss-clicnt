import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { MyAuthcontext } from '../Routes/Provider/Authprovider';





const usecard = () => {
    const { user } = useContext(MyAuthcontext);

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },

    })
    return [cart, refetch]
}
export default usecard