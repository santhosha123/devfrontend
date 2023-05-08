import React , {useState} from 'react';
import '../css/FlightList.css';
import FlightDetail from './FlightDetail';
import axios from 'axios'

const FlightList = ({ flights,render,setRender }) => {


  const [openBookTickets, setOpenBookTickets] = useState(false)

  const [details,setDetails] = useState({
    "count":"",
    "date":""
  })

  const [flightDetails,setFlightDetails] = useState({
    "flight_id":"",
    "price":"",
    "flight_name":"",

  })

  const handleBookTicketsCall = ()=> 
  { 
    console.log("first")
    setOpenBookTickets(true)
   }

  const handleFormChange = (event) => {
    const {name,value} = event.target
    setDetails({
      ...details,
      [name]:value
    })
  }

  const handleBookTicketsSubmitForm = ()=> {
    axios.post(`https://devrev12121.onrender.com/user/booktickets`,{

      "user_id":localStorage.getItem('id'),
      "price":details.count*flightDetails.price,
      "no_of_tickets":details.count,
      "flight_id":flightDetails.flight_id
    })
    .then(res=>{
      setOpenBookTickets(false)
      setRender(!render)
    })
    .catch(err=>{alert(err.response.data.message)
      console.log(err)})
    console.log(flightDetails)
  }
  return (
    <div className="flight-list">
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight Name</th>
            <th>Flight Number</th>
            <th>Price</th>
            <th>Departure Time</th>
            <th>Departure Date</th>
            <th>Landing Time</th>
            <th>Landing Date</th>
            <th>Available Seats</th>
            <th>Destination Location</th>
            <th>Start Location</th>
            <th>Book Your Tickets</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (


            <FlightDetail 
              flight={flight} 
              index={index} 
              handleBookTicketsCall={handleBookTicketsCall} 
              flightDetails={flightDetails} 
              setFlightDetails={setFlightDetails}/>
            
          ))}
        </tbody>
      </table>

      {
        openBookTickets 
        ? 
        <div>
          flight name : {flightDetails.flight_name}
          price : {flightDetails.price}

          count : <input name='count' value={details.price} onChange={handleFormChange}/>
          cost : {details.count*flightDetails.price || 0} 
          {/* date : <input type='date' name='date' value={openBookTickets.date} onChange={handleFormChange}/> */}
          <button onClick={handleBookTicketsSubmitForm}> SUBMIT </button>
        </div>
        : 
        ""
      }
    </div>
  );
};


export default FlightList;
