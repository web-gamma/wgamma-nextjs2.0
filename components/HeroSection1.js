import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/hero8.gif";

function heroPage() {
  return (
    <div className="min-w-7xl mx-0 md:mx-20">
      <div className=" flex md:flex-row flex-col justify-between items-center my-10">
        <div className="flex-col px-10 ">
          <h1 className="text-6xl text-gray-900 font-bold">
            Lets do{" "}
            <span className="text-blue-700">something </span> Amazing{" "}
            <span className="text-gray-900 border-blue-200">
              together
            </span>
          </h1>
          <p className="text-2xl text-gray-400 mt-5 mb-10">
          We build Custom project development and blockchain integration
          </p>
          <button className="border-2 border-blue-500 text-gray-900 hover:bg-blue-600 hover:shadow-lg px-8 h-14 rounded-md hover:text-white px-10 py-2 rounded-md text-sm font-medium">
            See Our Work
          </button>
        </div>
        <div className="px-150">
          <Image src={HeroImage} width={900} height={900} objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

export default heroPage;