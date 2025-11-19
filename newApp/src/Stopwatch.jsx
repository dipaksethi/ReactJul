import React, {useEffect ,useState} from 'react';

export default function Stopwatch() {
    const[cn , setC] = useState(0);
    useEffect(() => {setTimeout(() => {setC(cn + 1)}, 1000)});
  return (
    <div>
      <h1>This is a stopwatch{cn}</h1>
      
    </div>
  )
}
