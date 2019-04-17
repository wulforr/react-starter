import React from "react"
import Box from "./Box"
import MainData from "./MainData"


class WholeData extends React.Component{

    render(){
        const DataArray = MainData.map(data=>{
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