import React, { useState, useEffect } from "react";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import HeadingWithText from "./Components/HeadingWithText/HeadingWithText";
import Maps from "./Components/Maps/Maps";
import "./App.css"
import Graph from "./Components/Graph/Graph";
import { covertTimeStampToTime } from "./Utils/utils";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

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
      setError(true);
    };
    socket.onmessage = (event) => {
      const apiData = JSON.parse(event.data);
      setError(false);
      setData(apiData);
    };
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="rootContainer">
      {data ?
        <div className="parentContainer">
          <div className="wrapper">
            <Maps
              currentLat={data?.gps?.split('|')[0]}
              currentLong={data?.gps?.split('|')[1]}
              zoom={12}
            />
            <div className="rightSection">
              <ProgressBar 
                value={data?.speed} 
                unit="km/h" 
                heading="Current Speed" 
                enableAlert={data?.speed > 40} 
              />
              <ProgressBar 
                value={data?.soc} 
                unit="%" 
                heading="State of Charge" 
              />
              <div className="energyOdometerWrapper">
                <HeadingWithText 
                  value={data?.energy} 
                  unit="kW" 
                  heading="Energy" 
                />
                <HeadingWithText 
                  value={data?.odo} 
                  unit="km" 
                  heading="Odometer" 
                />
              </div>
            </div>

          </div>
          <div className="graphs">
            <Graph 
              xAxis={covertTimeStampToTime(data?.time)} 
              yAxis={data?.speed} 
              heading="Speed Profile" 
              label="Speed" 
            />
            <Graph 
              xAxis={covertTimeStampToTime(data?.time)} 
              yAxis={data?.soc} 
              heading="State of Charge Profile"
              label="SOC %"
              color="brown" 
            />
          </div>
        </div>
        :
        <p>{error ? "Something went wrong. Please try again" : "Loading please wait..."}</p>
      }
    </div>
  );
};

export default App;
