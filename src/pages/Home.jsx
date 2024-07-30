import React from "react";
import banner from "../assets/banner.png";
import closeicon from "../assets/close-circle-svgrepo-com.svg";

const Home = () => {
  return (
    <div
      className={` w-full min-[525px]:h-screen  h-2/5 bg-hero bg-no-repeat bg-cover flex justify-center items-center `}
    >
      <div className="w-full h-full flex flex-col bg-white/50 justify-center items-center">
        <div className="uppercase text-6xl text-blue-800 font-extrabold">
          {" "}
          vtech services pvt ltd
        </div>
        <div className="uppercase text-lg mt-8 text-white font-bold bg-blue-800 w-1/3 text-center">
          You imagine we create
        </div>
      </div>
    </div>
  );
};

export default Home;
