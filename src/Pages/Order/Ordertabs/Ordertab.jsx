import React from 'react';
import Foodcard from '../../../Component/Foodcard/Foodcard';

const Ordertab = ({item}) => {
    return (
        <div>
            <div className=' grid md:grid-cols-3 gap-5'>
                {
                    item.map(item => <Foodcard item={item} key={item._id}></Foodcard>)
                }
            </div>
        </div>
    );
};

export default Ordertab;