import React, { useState, useEffect } from "react";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import HeadingWithText from "./Components/HeadingWithText/HeadingWithText";
import Maps from "./Components/Maps/Maps";
import "./App.css"

const App = () => {
  const [data, setData] = useState(null);

  const dummy = {
    energy: 53.768,
    gps: "28.838648|78.773331",
    odo: 88527.005,
    soc: 72.8,
    speed: 21,
    time: 1511436454000,
  };

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");
    socket.onopen = () => {
      console.log("Connection opened");
    };
    socket.onclose = () => {
      console.log("Connection closed");
    };
    socket.onerror = () => {
      console.log("Connection error");
    };
    socket.onmessage = (event) => {
      const apiData = JSON.parse(event.data);
      // console.log("Data received from server:", apiData);
      setData(apiData);
    };
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="rootContainer">
      {data ? 
        <div className="wrapper">
          <Maps 
            currentLat={data?.gps?.split('|')[0]} 
            currentLong={data?.gps?.split('|')[1]}
            zoom={12}
          />
          <div className="rightSection">
            <ProgressBar value={data?.speed} unit="km/h" heading="Current Speed" />
            <ProgressBar value={data?.soc} unit="%" heading="State of Charge" />
            <div className="energyOdometerWrapper">
              <HeadingWithText value={data?.energy} unit="kW" heading="Energy" />
              <HeadingWithText value={data?.odo} unit="km" heading="Odometer" />
            </div>
          </div>
          
        </div>
        : 
        <p>Loading please wait...</p>
      }
    </div>
  );
};

export default App;
