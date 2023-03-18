import React,{useRef,forwardRef,useImperativeHandle,use} from "react";

import './Basket.css'

const MyInput=forwardRef((props,ref)=>{
    const refObject=useRef(null);
  
    useImperativeHandle(ref,()=>{
       
        return {focus:function(){
                           refObject.current.className="colorAdder"
                    },
                  }
        
   
    })
    return <input  ref={refObject}  />
  })
  
 const  Parent=()=>{
    const inputRef=useRef(null)
  const handleClick=()=>{
     inputRef.current.focus()
  }
      return (
      <>
      <MyInput ref={inputRef} />
        <button onClick={handleClick}>ref</button>
        </>
        )
  }
  export default Parent