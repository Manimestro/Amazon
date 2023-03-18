import { createContext,useReducer} from "react";
import React from "react";
 
export const Data=createContext(null)
export const Dispacher=createContext(null)


export default function Store({children}){
    const [cartData,dispatch]=useReducer(reducerfun,["string"]);
    return(
        <Data.Provider value={cartData}>
        <Dispacher.Provider value={dispatch}>
        {children}
        </Dispacher.Provider>
        </Data.Provider>
    )
}
 function reducerfun(state,action){
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "clickedButton" :{
            return [...state,action.value]
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
}