import React from 'react'
import './Subtotal.css'
import Basket from './Basket'
import CurrencyFormat from 'react-currency-format'
export const storage=React.createContext();
const Subtotal = () => {
  return (
    <div  className='Subtotal'>
    <CurrencyFormat 
        renderText={(value)=>(
           <div >
            <p style={{marginBottom:"1em"}}>
                Subtotal{0} items: <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
            <input type='checkbox' /> This Contains a Gift
            </small>
            </div>
        )}
        decimalScale={2}
        value={1000.1}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button> Proceed to Checkout</button>
    </div>
  )}
export default Subtotal