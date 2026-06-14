import { loadStripe } from "@stripe/stripe-js";

const  stripePromise = loadStripe(
    'pk_test_51TZfnoHCC268RR7UUoEaDYVyBsedngx6mQcvuSC94cuISrX09TPuXck1q5hXR9YGPPMs5Kvy8rEtGe3nOJTmjFld00zHUUovDO'
);

export default stripePromise;