import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Mybooking.css'; // Import your CSS file
import axios from 'axios';
function Mybooking() {
    const [trips,setTrips]=useState([])
    const navigate = useNavigate()
    useEffect(()=>
    {
        axios.get("http://localhost:3002/user/mybooking",{params:{"user_id":localStorage.getItem("id")}})
        .then(resp=>
            {
                setTrips(resp.data)
                console.log(resp)
            })
        .catch(err=>
            {
                console.log(err);
            })
    },[])
  return (
    <div className="cart-page">
      <button onClick={()=>navigate("/display")}>BACK</button>
      <h1 className="cart-page__title">Your Trips</h1>
      {trips.length === 0 ? (
        <p className="cart-page__empty">No Trips.</p>
      ) : (
        <table className="cart-items">
          <thead>
            <tr>
              <th className="cart-items__header">User ID</th>
              <th className="cart-items__header">Flight ID</th>
              <th className="cart-items__header">Booked Date</th>
              <th className="cart-items__header">Price</th>
              <th className="cart-items__header">No. of Tickets</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((item) => (
              <tr key={item.id} className="cart-items__row">
                <td>{item.user_id}</td>
                <td>{item.flight_id}</td>
                <td>{item.booked_date}</td>
                <td>{item.price}</td>
                <td>{item.no_of_tickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Mybooking;
