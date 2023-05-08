import React from "react";
import { Navigate, useLocation } from "react-router-dom";
export const Auth=(props)=>
{
    const location=useLocation();
    if(localStorage.getItem("id")==null)
    {
       return <Navigate to="/" state={{path:location.pathname}}></Navigate>
    }
    return props.children 
}