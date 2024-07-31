import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className=" flex flex-row justify-center items-center p-8">
          <span className="text-black text-center subpixel-antialiased text-4xl  text-inherit w-[80%] border-b-2 border-inherit py-6">
            Why Choose us
          </span>
        </div>
        <div className="flex flex-row w-full flex-wrap h-full justify-around items-center ">
          <div className="lg:w-[30%] flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center items-center w-full h-full px-8 py-2 gap-2">
              <span className="w-[10%] text-current text-start text-[#e4e4e4] text-2xl ">
                01
              </span>
              <h2 className="w-[90%] text-black font-medium">
                End to end support
              </h2>
            </div>
            <div className="flex flex-row justify-center items-center w-full h-full px-8 py-2 font-light opacity-50">
              We help design and develop your product under one roof. We are the
              one stop solution for Design , development and manufacturing your
              product enclosures and parts. With access to over 5 different
              technologies and 50+ different materials we make design to
              production seamless
            </div>
          </div>

          <div className="lg:w-[30%] flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center w-full h-full px-8 py-2 gap-2">
              <span className="w-[10%] text-current text-start text-[#e4e4e4] text-2xl">
                02
              </span>
              <h2 className="w-[90%] text-black  font-medium">
                Superior finish
              </h2>
            </div>
            <div className="flex flex-row justify-center items-center w-full h-full px-8 py-2 font-light opacity-50">
              We have various types of finishes available to make your product
              stand out. Super fine Glossy finish, Matt finish with various
              color options are available. We also do electroplating to give a
              metallic gold and silver finish. Time to stop paying for low
              quality products
            </div>
          </div>

          <div className="lg:w-[30%] flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center w-full h-full px-8 py-2 gap-2">
              <span className="w-[10%] text-current text-start text-[#e4e4e4] text-2xl">
                03
              </span>
              <h2 className="w-[90%] text-black  font-medium">
                Technical expertise
              </h2>
            </div>
            <div className="flex flex-row justify-center items-center w-full h-full px-8 py-2 font-light opacity-50">
              With over 15 years of combined experience in manufacturing, we
              guide you with the best technology, material and process to use
              for manufacturing your product. We also come up with innovative
              ways to address challenges. We ensure to balance cost and quality
              as per your requirements
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
