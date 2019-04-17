import React from "react"
import WholeData from "./WholeData"
import MainData from "./MainData"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            Data:MainData
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(num){
        let newContent = prompt("enter the the new content")
        this.setState(()=>{
            return({
                Data:MainData.map((unit)=>{
                        if(unit.key===num){
                            unit.content = newContent
                        }
                       return( unit
                    )
                })
            }
            )
        })
    }

    render(){
        return(
            <div>
                <h1 className="center">My Page</h1>
                <WholeData className="wholeData" Data2={this.state.Data} f={this.handleClick}/>
            </div>
            
        )
    }
}


export default App