import React,{useState}from'react'

function One() {
    const[const1,setcounts1]=useState(0);
    function myfunc()
    {
        setcounts1(const1+1);
    }
    function myfunc1()
    {
        setCounts1(const1-1);
    }
  return (
    <div>
        <button onMouseOver={myfunc}> <span>{const1}</span></button>
        <button onMouseOver={myfunc1}> <span>{const1}</span></button>
    <button onClick={myfunc}> <span>{const1}</span></button>
   <button onClick={myfunc1}> <span>{const1}</span></button>
    </div>
  )
}
export default One