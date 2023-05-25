

const ShowManu = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className="flex">
                <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px] mr-4' src={image} alt="" />
                <div className="flex space-x-5">
                    <h1>{recipe}</h1>
                    <p className="text-yellow-500">${price}</p>
                </div>
        </div>
    );
};

export default ShowManu;