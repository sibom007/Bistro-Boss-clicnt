
import { Helmet } from 'react-helmet-async';
import Cover from '../../Sheard/Cover/Cover';
import useManu from '../../../Hooks/usemanu/usemanu';
import Sectiontitle from '../../../Component/section-title/Sectiontitle';
import Manucategory from '../Manucategory/Manucategory';

import img from '../../../assets/assets/menu/banner3.jpg'
import dessertimg from '../../../assets/assets/menu/dessert-bg.jpeg'
import soupimg from '../../../assets/assets/menu/soup-bg.jpg'
import saladimg from '../../../assets/assets/menu/salad-bg.jpg'
import pizzaimg from '../../../assets/assets/menu/pizza-bg.jpg'

const Manu = () => {
    const [menu] = useManu();
    const dessert =menu.filter(item => item.category === "dessert")
    const soup =menu.filter(item => item.category === "soup")
    const salad =menu.filter(item => item.category === "salad")
    const pizza =menu.filter(item => item.category === "pizza")
    const offered =menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet><title>Bistro Boss | Manu</title></Helmet>
            <Cover img={img} title="Our Manu" />


            <Sectiontitle   Subtitle={"Don t Miss "} Maintitle={"today offer"}></Sectiontitle>
            <Manucategory items={offered}></Manucategory>


            {/* dessert */}
            <Manucategory items={dessert} title={'dessert'} img={dessertimg}></Manucategory>

            {/* soup */}
            <Manucategory items={soup} title={'soup'} img={soupimg}></Manucategory>

            {/* salad */}
            <Manucategory items={salad} title={'salad'} img={saladimg}></Manucategory>

            {/* pizza */}
            <Manucategory items={pizza} title={'pizza'} img={pizzaimg}></Manucategory>
        </div>
    );
};

export default Manu;