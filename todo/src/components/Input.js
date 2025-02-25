import React from "react";

const Input = ({value,onChange})=>(
    <input value={value} onChange={(e)=>onChange(e.target.value)} type="text"/>
)

export default Input;