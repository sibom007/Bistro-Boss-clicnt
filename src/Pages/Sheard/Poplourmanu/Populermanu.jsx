import { useEffect, useState } from "react";
import Sectiontitle from "../../../Component/section-title/Sectiontitle";
import ShowManu from "./ShowManu";

const Populermanu = () => {

    const [Manu,setManu] = useState([])

    useEffect(() => {
        fetch('Menudata.json')
            .then(res => res.json())
            .then(data => {

                const Poplurdata = data.filter(item => item.category === "popular")
                setManu(Poplurdata)
            })
    }, [])


    return (
        <div>
            <section>
                <Sectiontitle
                    Subtitle={"------Check it out------"}
                    Maintitle={"FROM OUR MENU"}
                ></Sectiontitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-10">
                    { 
                    Manu.map(item => <ShowManu
                    key={item.id}
                    item={item}
                    ></ShowManu> )
                    }
                </div>

            </section>

        </div>
    );
};

export default Populermanu;