import React from "react";
import electrical_img from '../assets/public/electrical_plumbing.jpeg'
import { ShowMore } from '@re-dev/react-truncate'


const Services = () => {
  return (
    <>
      <div className="font-Poppins bg-white text-white w-full h-100 p-8">
        <div className="text-center w-full h-full flex flex-col item-center ">
          <h1 className="text-black font-weight-bold">Our Services</h1>
          <div className="flex flex-row flex-wrap  lg:p-8  md:p-8 gap-8  group w-full">
            <div className="bg-dark/10 text-black flex-1 flex-grow border border-2 border-grey lg:w-[40%] md:w-[30%]  sm:w-[100%] sm:mx-auto duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  p-8 rounded-xl mix-blend-luminosity ">
              <img src={electrical_img} alt="" className="h-[200px] w-full mx-auto  " />
              <h4 className="uppercase text-xl font-bold ">construction electrical and plumbing work new and AMC MAINTENANCE </h4>
              <ShowMore lines={1} className="text-sm leading-7 my-3 font-light opacity-50">
                We specialize in electrical and plumbing installations for new construction projects, ensuring high-quality and compliant systems. Our services also include Annual Maintenance Contracts (AMC) for regular inspections and preventive maintenance. This helps in keeping systems running efficiently and addressing issues promptly. We are committed to reliable service and customer satisfaction.
              </ShowMore>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full ">Get in Touch</button>
            </div>

            <div className="bg-dark/10 text-black flex-1  flex-grow border border-2 border-grey lg:w-[40%] md:w-[30%]  sm:w-[100%] sm:mx-auto duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  p-8 rounded-xl mix-blend-luminosity ">
              <img src={electrical_img} alt="" className="h-[200px] w-full mx-auto  " />
              <h4 className="uppercase text-xl font-bold ">CCTV INSTALLATION AND MAINTENANCE</h4>
              <ShowMore lines={1} className="text-sm leading-7 my-3 font-light opacity-50">
                We offer professional CCTV installation services, ensuring comprehensive surveillance coverage for your property. Our team provides customized solutions, from system design to camera setup. In addition, we offer maintenance services, including regular system checks and troubleshooting to ensure optimal performance and security. We are committed to providing reliable and effective surveillance solutions.              
              </ShowMore>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full ">Get in Touch</button>
            </div>

            <div className="bg-dark/10 text-black  flex-1 flex-grow border border-2 border-grey lg:w-[40%] md:w-[30%]  sm:w-[100%] sm:mx-auto duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  p-8 rounded-xl mix-blend-luminosity ">
              <img src={electrical_img} alt="" className="h-[200px] w-full mx-auto  " />
              <h4 className="uppercase text-xl font-bold ">HOME AUTOMATION SYSTEM INSTALLATION</h4>
              <ShowMore lines={1} className="text-sm leading-7 my-3 font-light opacity-50">
                We provide expert home automation system installation, enabling seamless control of lighting, climate, security, and entertainment devices. Our solutions are tailored to your needs, offering convenience and energy efficiency. We ensure easy integration with smart home devices and provide ongoing support to maintain system functionality. Experience the comfort and security of a fully automated home.
              </ShowMore>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full ">Get in Touch</button>
            </div>

            <div className="bg-dark/10 text-black  flex-1 flex-grow border border-2 border-grey lg:w-[40%] md:w-[30%]  sm:w-[100%] sm:mx-auto duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  p-8 rounded-xl mix-blend-luminosity ">
              <img src={electrical_img} alt="" className="h-[200px] w-full mx-auto  " />
              <h4 className="uppercase text-xl font-bold ">AGRI AUTOMATION </h4>
              <ShowMore lines={1} className="text-sm leading-7 my-3 font-light opacity-50">
                We specialize in agri automation, offering solutions that optimize farming operations through technology. Our systems include automated irrigation, soil monitoring, and crop management, enhancing efficiency and productivity. We provide tailored solutions to meet the specific needs of different agricultural setups, helping farmers reduce labor costs and improve yields. Experience smarter farming with our advanced automation services.
              </ShowMore>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full ">Get in Touch</button>
            </div>

            <div className="bg-dark/10 text-black  flex-1 flex-grow  border border-2 border-grey lg:w-[40%] md:w-[30%]  sm:w-[100%] sm:mx-auto duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  p-8 rounded-xl mix-blend-luminosity ">
              <img src={electrical_img} alt="" className="h-[200px] w-full mx-auto  " />
              <h4 className="uppercase text-xl font-bold "> ELECTRONIC ENCLOSURE DESIGNING AND MAKEING  </h4>
              <ShowMore lines={1} className="text-sm leading-7 my-3 font-light opacity-50">
                We offer specialized services in electronic enclosure design and manufacturing, providing custom solutions to protect your electronic components. Our designs ensure optimal functionality, durability, and aesthetics, tailored to your specific requirements. We use high-quality materials and precision engineering to create enclosures that meet industry standards. Trust us for reliable and innovative electronic enclosure solutions.
              </ShowMore>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full ">Get in Touch</button>
            </div>

            <div className="bg-dark/10 text-black flex-1 flex-grow   border border-2 border-grey lg:w-[40%] md:w-[30%]  sm:w-[100%] sm:mx-auto duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  p-8 rounded-xl mix-blend-luminosity ">
              <img src={electrical_img} alt="" className="h-[200px] w-full mx-auto  " />
              <h4 className="uppercase text-xl font-bold "> 3D MODELS PRINTING </h4>
              <ShowMore lines={1} className="text-sm leading-7 my-3 font-light opacity-50">
                We provide professional 3D printing services, creating precise and detailed models for various applications. Our advanced 3D printers can produce prototypes, custom parts, and intricate designs with high accuracy. We cater to a wide range of industries, offering both rapid prototyping and small-scale production. Experience the versatility and innovation of 3D printing with us.
              </ShowMore>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full ">Get in Touch</button>
            </div>

            <div className="bg-dark/10 text-black  flex-1 flex-grow  border border-2 border-grey lg:w-[40%] md:w-[30%]  sm:w-[100%] sm:mx-auto  duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  p-8 rounded-xl mix-blend-luminosity ">
              <img src={electrical_img} alt="" className="h-[200px] w-full mx-auto  " />
              <h4 className="uppercase text-xl font-bold "> required based electronic hardware making </h4>
              <ShowMore lines={1} className="text-sm leading-7 my-3 font-light opacity-50">
                We specialize in designing and manufacturing custom electronic hardware based on your specific requirements. Our services include circuit design, PCB layout, component selection, and assembly, ensuring high-quality and reliable products. We cater to various industries, providing solutions for both prototypes and full-scale production. Partner with us for tailored electronic hardware that meets your unique needs.
              </ShowMore>
              <button className="bg-btn_primary py-2.5 px-8 rounded-full ">Get in Touch</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
