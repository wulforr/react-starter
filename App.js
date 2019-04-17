import React from "react"
import WholeData from "./WholeData"

class App extends React.Component{
    render(){
        return(
            <div>
                <h1 className="center">My Page</h1>
                <WholeData className="wholeData" />
            </div>
            
        )
    }
}


export default App