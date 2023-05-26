import { useState } from 'react';
import Cover from '../../Sheard/Cover/Cover';
import Orderimg from '../../../assets/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useManu from '../../../Hooks/usemanu/usemanu';
import Ordertab from '../Ordertabs/Ordertab';
// import { useParams } from 'react-router-dom';

const Order = () => {
    // const categoryies = ["dessert", 'soup', 'Salad', 'Pizza', 'drinks'];
    // const { category } = useParams();
    // const initialIndex = categoryies.indexOf(category)
    // const [Tabindex, setTabindex] = useState(initialIndex)
    const [menu] = useManu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <Cover title={"Order Now"} img={Orderimg}></Cover>
            {/* defaultIndex={Tabindex} onSelect={(index) => setTabindex(index)} */}
            <Tabs className='mt-6 mb-6'>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel><Ordertab item={dessert}></Ordertab></TabPanel>
                <TabPanel><Ordertab item={soup}></Ordertab></TabPanel>
                <TabPanel><Ordertab item={salad}></Ordertab></TabPanel>
                <TabPanel><Ordertab item={pizza}></Ordertab></TabPanel>
                <TabPanel><Ordertab item={drinks}></Ordertab></TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;