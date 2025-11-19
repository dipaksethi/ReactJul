import React, { useState } from "react";


export default function Count() {
    let [count, setCount] = useState(0);
    const  inc =  () => {
        setCount(count = count + 1);
        
    }
  return (
    <div>
      
        <h1>Count Component {count}</h1>
        <button onClick={inc}>Increment Count </button>
    </div>
  )
}
