import Banner from '../Banner/Banner';
import Catorygary from '../Catorygary/Catorygary';
import Populermanu from '../../Sheard/Poplourmanu/Populermanu';
import Feture from '../Feture/Feture';
import Ratingess from '../Rating/Ratingess';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Catorygary />
            <Populermanu />
            <Feture />
            <Ratingess />
        </>
    );
};

export default Home;