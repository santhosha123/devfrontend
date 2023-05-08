import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookedYetCard from './BookedYetCard'
import AdminNav from './AdminNav';


function BookedYet()
{

    const [flight,setFlight] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:3002/admin/getflights')
        .then(response=>
            {
                setFlight(response.data)
                console.log(response.data)
            })
        .catch(error=>console.log(error))
    },[])
    return(

        <>
                <AdminNav/>

        { flight.length ?
              flight?.map((x)=>(

                <div>
                    <p>flight number: {x[0].flight_no}</p>
                    <p>flight name: {x[0].flight_name}</p>
                    <p>departure time: {JSON.stringify(x[0].departure_time).slice(1,11)}</p>

                    <table>
                    <thead>
                        <td>userName</td>
                        <td>count</td>
                    </thead>
                        <BookedYetCard x={x}/>
                </table>

                </div>
                
                
              ))
              : <p>wait for few minutes</p>
        }
        </>

    )

}

export default BookedYet