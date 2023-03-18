import React,{useContext} from 'react'
import './Basket.css'
import Subtotal from './Subtotal'
import { Dispacher,Data } from './ContextApi'
 const Basket=function(){
  const data=useContext(Data)
  console.log(data)
  return (
    <div className='basket'>
        <div className='basket-left'>
            <img className='ad-image' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg'/ >
            <span className='title'> <strong>Your Shopping Cart</strong></span>
        </div>
        <div className='basket-right'>
            <div className='checkout'>
            <Subtotal/>
            {data.map(item=>{
              return(
                <ul key={item.id+10}>
                    <li key={item.id}>{item.price}</li>
                </ul>
              )
            })}
            
            </div>
        
    </div>
    </div>
  )
}
export default Basket