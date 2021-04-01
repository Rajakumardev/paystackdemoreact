import React from 'react'
import { PaystackButton } from 'react-paystack';
import { useParams } from 'react-router-dom'

const Payment = () => {
    const params = useParams();
    const config = {
        reference: (new Date()).getTime(),
        email: "user@example.com",
        // amount: 2,
        publicKey: "pk_test_4b51e18cd60a521403e338b966109a10b47f8a14"
    };
    const handleSuccess = async (reference) => {
        console.log(reference);
        const responseObj = await fetch(`https://paystackdemoapi.herokuapp.com/verifypayment/${reference.reference}`);
        const responseData = await responseObj.json();
        console.log("verification response:", responseData);
    };

    // you can call this function anything
    const handleClose = () => {
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose,
        plan: params.type === 'svod' ? 'PLN_b4zy7t0kzqo2j06' : ''
    };
    console.log('params:', params);
    return (
        <div>
            <b>payemnt type</b> : {params.type} <br />
            <PaystackButton
                {...componentProps}
            />
        </div>
    )
}

export default Payment
