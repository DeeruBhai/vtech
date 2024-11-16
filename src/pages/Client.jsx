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
    <>
    <div className=" flex flex-row justify-center h-[100%] w-[100%]  items-center p-16">
      <span className="text-black text-center subpixel-antialiased text-4xl  text-inherit w-[80%] border-b-2 border-inherit py-6">
        Our Clients
      </span>
    </div>
    <div className="grid gap-1 auto-cols-auto lg:p-8 md:p-8 sm:p-0 w-full h-full sm:grid-cols-1  sm:place-items-center md:grid-cols-2 lg:grid-cols-3 grid-flow-row">
      {clients.map((cmpy) => {
        return (
          // <Title options={{ scale: 2, max: 25 }}>
          <Title
            options={{ scale: 2, max: 100, "max-glare": 1, speed: 100 }}
            className="flex  flex-col justify-center items-center shadow-[5px_5px_60px_-10px_rgba(0,0,0,0.3)]  lg:w-5/6 md:w-5/6 sm:w-[100%] sm:m-[1px] lg:mt-8 md:mt-8 sm:mt-0 overflow-hidden rounded-xl"
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
    </>
  );
};

export default Client;
