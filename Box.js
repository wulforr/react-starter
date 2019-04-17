import React from "react"

class Box extends React.Component{
    render(){
        return(
            <div className="box">
                <img src={require(`${this.props.data1.url}`)} alt="A" ></img>
                <p className ="center">{this.props.data1.content}</p>
            </div>
        )
    }
}

export default Box