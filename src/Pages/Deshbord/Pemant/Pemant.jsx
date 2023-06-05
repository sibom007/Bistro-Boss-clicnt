import { Helmet } from 'react-helmet-async';
import Sectiontitle from '../../../Component/section-title/Sectiontitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import usecard from '../../../Hooks/usecard';

const Pemant = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY)
    const [cart] = usecard();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Sectiontitle Subtitle={'---Please process---'} Maintitle={'PAYMENT'} />



            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart} />
            </Elements>
        </div>
    );
};

export default Pemant;