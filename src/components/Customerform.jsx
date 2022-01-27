import React, { useState } from 'react';
import shortUUID from 'short-uuid';
import Short from 'short-uuid';
import { v4 as uuidv4 } from 'uuid';

function Customerform() {
 
  const [ checkNumber, setCheckNumber] = useState("");
  const [ amount, setAmount ] = useState("");


  const changeAmount = (e) => {
    setAmount(e.target.value)
  }
  const changeCheck = (e) => {
    setCheckNumber(e.target.value)
  }

  const HandleSubmit =(e) => {
    e.preventDefault();
    
    const transaction = {
      ID : shortUUID.generate(),
      Amount: amount,
      CheckNumber: checkNumber,
    }
    console.log(transaction);

  }
 
  return( 
        <form onSubmit={ HandleSubmit} className="box">
            <div className="field">
              <label className="label">Check Number</label>
                <div className="control">
                 <input className="input" value={checkNumber} type="text" onChange={changeCheck} />
                </div>
           </div>

            <div class="field">
              <label class="label">Amount</label>
                <div class="control">
                  <input class="input" value={amount} type="number" onChange={changeAmount}  />
                </div>
            </div>

            <button type= "submit" class="button is-primary">Sign in</button>
        </form>
  );
}

export default Customerform;
























 // <div>
        //     <div>
        //     <form>
        //       <div>
        //         <label>Check Number:</label>
        //         <input type="text" />
        //         <label> Amount: </label>
        //         <input type="number" />
        //       </div>
        //     </form>
        //   </div> 
        // </div>