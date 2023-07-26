import React from "react";

class Channel extends React.Component{
    constructor(){
        super();
        this.state={msg:"this is Channel via State"}
    }
    sub(){
       return this.setState({msg:"clicked"})
    }

    render(){
        return (
            <div>
                <h1>{this.state.msg} </h1>
                <button onClick={()=>{this.sub()}}>sub</button>
            </div>
        )
    }
        
}

export default Channel;