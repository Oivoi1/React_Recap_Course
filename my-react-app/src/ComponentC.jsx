// useContext() = React Hook that allows you to share values between multiple 
//                levels of components without passing props through each level
import React, {useState, useContext} from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

function ComponentC(){

  const user = useContext(UserContext)

    return(<>
          <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}!`}</h2>
            <ComponentD/>
          </div>
          </>)
}
export default ComponentC;