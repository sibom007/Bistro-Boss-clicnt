import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useManu = () => {

    // const [Manu, setManu] = useState([])
    // const [Loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:5000/manu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setManu(data)
    //             setLoading(false)
    //         })
    // }, [])


    const { data: Manu = [], isLoading: Loading, refetch } = useQuery({
        queryKey: ['manu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/manu');
            return res.json();
        }
    })

    return [Manu, Loading, refetch]
}

export default useManu;