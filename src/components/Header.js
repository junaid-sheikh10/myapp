import React from "react";

var Header = (props) => {
    return (
    <div>
    <h1>Hello {props.n}</h1>
    
    {props.children}
    </div>
    )
}

export default Header