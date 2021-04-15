import React, { useEffect, useState } from "react";

const Card = ({ title, unit }) => {
  const [fahrenheit, setFahrenheit] = useState(unit);
  const [isC, setIsC] = useState(true);

  useEffect(() => {
    const converted = Math.round((Number(unit) * 9) / 5 + 32);
    setFahrenheit(converted);
  }, [isC, unit]);

  return (
    <>
      <div className="w-36 h-32 bg-gray-100 p-1 flex flex-col items-center justify-around rounded-md shadow-md">
        <h1 className="uppercase font-semibold text-gray-800 text-xs">
          {title}
        </h1>
        <h2 className="text-xl font-black text-gray-900">
          {isC ? unit : fahrenheit}{" "}
          {title === "temperature" ? (
            <sup
              className="text-gray-500 font-medium"
              onClick={() => setIsC(!isC)}
            >
              °{isC ? "C" : "F"}
            </sup>
          ) : (
            <sup className="text-gray-500 font-medium">
              g/m<sup>3</sup>
            </sup>
          )}
        </h2>
      </div>
    </>
  );
};

export default Card;
