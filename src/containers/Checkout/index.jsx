import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";

import stripePromise from "../../Config/stripeConfig";
import  CheckoutForm  from "../../components/Stripe/CheckoutForm/index.jsx";

export function Checkout() {

    const {state: { clientSecret },
} = useLocation();

if (!clientSecret) {
    return <div>Erro, volte e tente novamente</div>;
}


   
    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    );
}

