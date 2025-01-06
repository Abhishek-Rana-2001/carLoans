import React from "react";
import {useNavigate} from "react-router-dom"

const Offer = () => {

  const navigate = useNavigate()
  return (
    <div className="h-screen content-center">
      <div className="flex">
        <div className="flex-1 p-4 space-y-2 content-center">
          <h1 className="md:text-5xl font-bold mx-auto w-max">
            Thanks for Applying
          </h1>
          <p className="md:text-2xl mx-auto w-max">
            Our representative will come in contact with you shortly
          </p>
          <div className="flex justify-center"><button className="bg-purple-500 text-white px-4 py-2 rounded-3xl font-semibold" onClick={()=>navigate("/")}>Return to Home</button></div>
        </div>
        <div className="flex-1 relative flex">
          <img className="max-w-[500px]" src="/offerpage1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
