import React from "react";
import Title from "react-vanilla-tilt";
import quant from "../assets/quantanics.png";
import smi from "../assets/smi.png";

const Client = () => {
  const clients = [
    {
      cname: "Quantanics Tech Serv Pvt Ltd",
      logosrc: quant,
    },
    {
      cname: "Quantanics Tech Serv Pvt Ltd",
      logosrc: smi,
    },
    {
      cname: "Quantanics Tech Serv Pvt Ltd",
      logosrc: smi,
    },
    {
      cname: "Quantanics Tech Serv Pvt Ltd",
      logosrc: smi,
    },
    {
      cname: "Quantanics Tech Serv Pvt Ltd",
      logosrc: smi,
    },
    {
      cname: "Quantanics Tech Serv Pvt Ltd",
      logosrc: smi,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-1 auto-cols-auto p-8 w-full h-full sm:grid-cols-3 md:grid-cols-2grid-flow-row">
      {clients.map((cmpy) => {
        return (
          // <Title options={{ scale: 2, max: 25 }}>
          <Title
            options={{ scale: 2, max: 100, "max-glare": 1, speed: 100 }}
            className="flex  flex-col justify-center items-center shadow-[5px_5px_60px_-10px_rgba(0,0,0,0.3)]  w-5/6 mt-8 overflow-hidden rounded-xl"
          >
            <img src={cmpy.logosrc} alt="client" className="w-4/6 mt-8" />
            <p className="p-2 mt-2  w-full whitespace-nowrap text-center">
              {cmpy.cname}
            </p>
          </Title>
          // </Title>
        );
      })}
    </div>
  );
};

export default Client;
