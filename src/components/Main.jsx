import React, { useEffect, useState } from "react";
import { realTimeDb } from "../firebase";
import { svg } from "./Svg";
import Card from "./Card";

const Main = () => {
  const [sensorData, setSensorData] = useState({});

  const getData = () => {
    const dbRef = realTimeDb.ref();
    dbRef
      .child("DHT")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const val = snapshot.val();
          console.log(val);
          setSensorData(val);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="p-3">
        <section className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 fill-current text-blue-600">{svg.temp}</div>
            <h1 className="text-2xl capitalize font-bold text-blue-600">
              live sensor data
            </h1>
          </div>

          <div className="flex space-x-4">
            <Card title={"temperature"} unit={sensorData && sensorData.TEMP} />
            <Card title={"humidity"} unit={sensorData && sensorData.HUMDITY} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
