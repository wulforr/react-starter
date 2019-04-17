import React from "react"
import WholeData from "./WholeData"
import MainData from "./MainData"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            Data:MainData
        }
    }
    render(){
        return(
            <div>
                <h1 className="center">My Page</h1>
                <WholeData className="wholeData" Data2={this.state.Data}/>
            </div>
            
        )
    }
}


export default App