import React, { useEffect, useState }from 'react';

export default function Counter() {
    const [c ,setCount] = useState(0);
    useEffect(() => console.log("You clicked the Button"));
  return (
    <div>
      <h1>You Clicked {c} times</h1>
      <button onClick={ () => {setCount(c+1)}}>Click Me</button>
    </div>
  )
}
