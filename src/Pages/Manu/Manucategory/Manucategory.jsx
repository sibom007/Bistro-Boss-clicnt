import Cover from '../../Sheard/Cover/Cover';
import ShowManu from '../../Sheard/Poplourmanu/ShowManu';
import { Link } from 'react-router-dom';

const Manucategory = ({ items,img,title}) => {
    return (
        <div className='py-8'>
             {title && <Cover img={img} title={title} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 mt-16">
                {
                    items.map(item => <ShowManu
                        key={item._id}
                        item={item}
                    ></ShowManu>)
                }

               
            </div>
            <Link to={`/order`}><button className="btn btn-outline border-0 border-b-4">Order Now </button></Link>
           
        </div>
    );
};

export default Manucategory;