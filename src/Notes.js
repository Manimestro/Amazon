import React,{ flushSync,useState , useRef , forwardRef , useImperativeHandle, useEffect ,createElement} from 'react'
import './Notes.css'
import Parent from './Ref'
import CatFriends from './refcallback'
import './Basket.css'

function Experiment(){
  const ele=createElement(
    "div",
    {className:"styler"},
  
    createElement("div",null,createElement(
        "h1",{className:"makeCenter"},"comp1"
    ),null),
    createElement("div",null,createElement(
        "h1",{className:"makeCenter"},"comp2"
    ),null),
    createElement("div",null,createElement(
        "h1",{className:"makeCenter"},"comp3"
    ),null)
)
  return (
    ele
  )
}


  







function Notes() {
    const [count ,setCount]=useState(0)
    const ref=useRef(0)
    console.log(ref)
  const batching=()=>{
     ref.current+=1
    flushSync(()=>{
        setCount(c=>c+1)
        setCount(c=>c+1)
        setCount(c=>c+1)
    })
  }
  useEffect(()=>{
    ref.current.className="colorAdder2"
    const ref2=ref.current
    console.log("first")
    return ()=>{
      ref2.className="colorAdder"
      console.log("second")
    }
  },[])
  return (
    
    <div>
        <h1>{count}</h1>
        <button onClick={batching}>click me</button>
        {/* <Parent /> */}
        <h1 ref={ref}> mount</h1>
        {/* <CatFriends/> */}
        <Experiment/>
    </div>
  )
}

export default Notes