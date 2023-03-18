import React,{useContext} from "react";
import Notes from "./Notes";
import "./product.css";
import { Dispacher} from "./ContextApi";
function Product({id, title, image, price, rating }) {
  const dispatch=useContext(Dispacher)
   let star=""
   for(let i=0; i<rating ; i++){
      star+="🌟"
   }
   const itemsSender=(id,title,image,price,rating)=>{
    console.log(title)
    dispatch(
      {
        type:"clickedButton",
        value:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating
        }
      }
    )
   
   }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {star}
        </div>

      </div>
      <img src={image} alt="" />
      <button onClick={()=>itemsSender(id,title,image,price,rating)}>Add to Basket</button>
    </div>
  );
}

export default Product;