import React from 'react'
import {Routes,Route} from "react-router-dom";
import AllPaths from './RoutingPaths';
function Routing() {
  return (
    <div>
        <Routes>
        {AllPaths?.map((item,index)=>{
            return(
                <>
<Route element={item?.element} exact={item?.exact} path={item?.path} key={index}/>
                
                </>
            )
        })}
        </Routes>
    </div>
  )
}

export default Routing