import {useState,React,useEffect} from 'react';
import FlightList from './flightmap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Displayflight=()=>
{
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [s1, sets1] = useState("");
  const [render,setRender] = useState(false)
 const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    sets1(`${date}T${time}:00Z`);
  };
    
  const [flights,setflights] =useState([]);
  useEffect(()=>
{
  if(date)
  {
    axios.get("https://devrev12121.onrender.com/user/getflight",{params:{departure_date:s1}})
    .then(res=>
        {
            setflights(res.data)
        })
        .catch(err=>
        {
                console.log(err)
        })
  }
  else
  {
    axios.get("https://devrev12121.onrender.com/admin/flight")
    .then(res=>
        {
            setflights(res.data)
        })
        .catch(err=>
        {
                console.log(err)
        })
  }
},[s1,render]) 
  // Assuming you fetch the flight data from the backend and store it in a variable called `flights`
  return (
    <div>
      <form className="search-bar">
      <label className="search-bar__label">Select a date:</label>
      <input
        className="search-bar__input"
        type="date"
        onChange={(e) => setdate(e.target.value)}
      />
      <label className="search-bar__label">Select a time:</label>
      <input
        className="search-bar__input"
        type="time"
        onChange={(e) => settime(e.target.value)}
      />
      <button className="search-bar__button" onClick={handleSubmit}>
        Search
      </button>
      <button className="search-bar__button" onClick={()=>{sets1("")}}>
        ViewAllFlights
      </button>
      <button className="mybooking" onClick={()=>{navigate('/mybooking')}}>
        MyTrips
      </button>
      <button className="logout" onClick={()=>{localStorage.clear();}}>
        Logout
      </button>
      
      
    </form>
      <h1>Flight List</h1>
      <FlightList flights={flights} render={render} setRender={setRender} />
    </div>
  );
  }

export default Displayflight;
