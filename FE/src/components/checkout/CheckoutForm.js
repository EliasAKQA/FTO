import {CardElement, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const cardElement = elements.getElement(CardElement);
        const billingDetails = {
            name: ev.target.name.value,
            email: ev.target.email.value,
            address: {
                country: ev.target.country.value,
                city: ev.target.city.value,
                line1: ev.target.address.value,
            }
        };
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: billingDetails,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            let cartStage = props.state;
            console.log(cartStage);
            props.func(cartStage + 1);
            // props.setstate(cartStage + 1 );
            // console.log(props.state);
            // ... POST: /api/charge/user
        }
    };
    const inputStyle = {
        iconColor: '#ffffff',
        color: '#ffffff',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
            color: '#fce883',
        },
        '::placeholder': {
            color: 'rgb(128, 128, 128)',
        },
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='input--container'>
                <label>Full Name</label>
                <input name='name' type={'text'} placeholder='Your full name' required></input>
            </div>
            <div className='input--container'>
                <label>Email</label>
                <input name='email' type={'email'} placeholder='email@example.com' required></input>
            </div>
            <div className='input--container'>
                <label>Address</label>
                <input name='address' type={'text'} placeholder='123 street apartment 12' required></input>
            </div>
            <div className='input--container'>
                <label>City</label>
                <input name='city' type={'text'} placeholder='City' required></input>
            </div>
            <div className='input--container'>
                <label>Country Code</label>
                <input name='country' type={'text'} placeholder='fx. DK for denamrk' required></input>
            </div>
            <div className='input--container'>
                <label>Card Info</label>
                <CardElement options={{style: {base: inputStyle}}}/>
            </div>
            <button className='btn btn--primary'>Pay</button>
        </form>

        // <form>
        //   <PaymentElement />
        //   <button className='btn btn--primary'>Submit</button>
        // </form>
    );
};

export default CheckoutForm;
