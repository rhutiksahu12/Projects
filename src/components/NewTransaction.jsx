import React from 'react';
import Customerform from './Customerform';



const NewTransaction = () => {
    const newCustomer = ( enteredtransaction ) => {
        console.log(enteredtransaction);
    };
  
    return(
    <div>
        <Customerform newCustomer= {newCustomer} />
    </div>    


)
};

export default NewTransaction;
