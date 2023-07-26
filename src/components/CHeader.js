import React from "react";


class CHeader extends React.Component{
    render(){

    //  const numbers = [1,2,3,4 ]
     const numbers=this.props.numbers;

        return(
            
            <React.Fragment>
                <h1>Hello {this.props.name} {this.props.last}</h1>

                   <ul>
                    {
                    numbers.map((numbers)=><li>{numbers}</li>)
                    }
                    </ul>         
            </React.Fragment>
        )
    }
}

export default CHeader;