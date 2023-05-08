import React, { useState } from 'react';
//import styled from 'styled-components';

const AddFlightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export default AddFlightForm = () => {
  const [flightNo, setFlightNo] = useState('');
  const [flightName, setFlightName] = useState('');
  const [price, setPrice] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [landingTime, setLandingTime] = useState('');
  const [landingDate, setLandingDate] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [startLocation, setStartLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a flight object with the form data
    const flight = {
      flightNo,
      flightName,
      price,
      departureTime,
      departureDate,
      landingTime,
      landingDate,
      availableSeats,
      destinationLocation,
      startLocation
    };

    // You can perform further actions here, like sending the data to a backend API

    // Reset the form
    setFlightNo('');
    setFlightName('');
    setPrice('');
    setDepartureTime('');
    setDepartureDate('');
    setLandingTime('');
    setLandingDate('');
    setAvailableSeats('');
    setDestinationLocation('');
    setStartLocation('');
  };

  return (
    <AddFlightContainer>
      <div>
        <label>Flight Number:</label>
        <input type="text" value={flightNo} onChange={(e) => setFlightNo(e.target.value)} />
      </div>
      <div>
        <label>Flight Name:</label>
        <input type="text" value={flightName} onChange={(e) => setFlightName(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Departure Time:</label>
        <input type="text" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
      </div>
      <div>
        <label>Departure Date:</label>
        <input type="text" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
      </div>
      <div>
        <label>Landing Time:</label>
        <input type="text" value={landingTime} onChange={(e) => setLandingTime(e.target.value)} />
      </div>
      <div>
        <label>Landing Date:</label>
        <input type="text" value={landingDate} onChange={(e) => setLandingDate(e.target.value)} />
      </div>
      <div>
        <label>Available Seats:</label>
        <input type="text" value={availableSeats} onChange={(e) => setAvailableSeats(e.target.value)} />
      </div>
      <div>
        <label>Destination Location:</label>
        <input type="text" value={destinationLocation} onChange={(e) => setDestinationLocation(e.target.value)} />
      </div>
      </AddFlightContainer>)
}
