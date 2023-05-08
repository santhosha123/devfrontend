
import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'


function Admin() {


  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',backgroundColor:'blue', padding:'10px'}}>

        <NavLink to='/admin' style={{color:'white',textDecoration:'none'}}>PANEL</NavLink>
        <NavLink to='/bookedyet' style={{color:'white',textDecoration:'none'}}>FLIGHT TRIPS</NavLink>
        <Outlet/> 

    </div>
  )
}

export default Admin