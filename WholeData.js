import React from "react"
import Box from "./Box"


class WholeData extends React.Component{

    render(){
        const DataArray = this.props.Data2.map(data=>{
            return(
                <Box data1={data} />
            )
        }) 
        return(
            <div className="main container center">
            {
               DataArray
            }
            </div>
        )
    }
}

export default WholeData