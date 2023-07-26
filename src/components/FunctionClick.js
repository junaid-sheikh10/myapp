import React from 'react'

function FunctionClick() {
    function clicked(){
        console.log("buttonn lciked");
    }

  return (
    <div> <button onClick={clicked}>click me</button> </div>
    
  )
}

export default FunctionClick;