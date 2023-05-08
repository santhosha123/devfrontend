import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BookedYet({x})
{
    console.log(x[0])
    const map = x.map((y)=>(
        <tr>
            <td>{y.user_name}</td>
            <td>{y.no_of_tickets}</td>
        </tr>
    ))

    return(
        <tbody>
            {/* <p>{x[0].flight_no}</p>
            <p>{x[0].flight_name}</p> */}
            {map}

        </tbody>
    )
    


}

export default BookedYet