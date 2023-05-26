import { useEffect, useState } from "react";

const useManu = () => {

    const [Manu, setManu] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/manu')
            .then(res => res.json())
            .then(data => {
                setManu(data)
                setLoading(false)
            })
    }, [])
    return [Manu, Loading]
}

export default useManu;