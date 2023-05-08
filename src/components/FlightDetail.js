import React from 'react'

function FlightDetail({flight,index,handleBookTicketsCall,flightDetails,setFlightDetails}) {


    const bookTicketsCall = ()=>{
        handleBookTicketsCall()
        setFlightDetails({
          "flight_id":flight._id,
          "price":flight.price,
          "flight_name":flight.flight_name
        })
    }


  return (
    <tr key={index}>
              <td>{flight.flight_name}</td>
              <td>{flight.flight_no}</td>
              <td>{flight.price}</td>
              <td>{JSON.stringify(flight.departure_time).slice(12,24)}</td>
              <td>{JSON.stringify(flight.departure_date).slice(1,11)}</td>
              <td>{JSON.stringify(flight.landing_time).slice(12,24)}</td>
              <td>{JSON.stringify(flight.landing_date).slice(1,11)}</td>
              <td>{flight.availableseats}</td>
              <td>{flight.destination_location}</td>
              <td>{flight.start_location}</td>
              <td><button onClick={bookTicketsCall}>Book Your Tickets</button></td>
    </tr>
  )
}

export default FlightDetail