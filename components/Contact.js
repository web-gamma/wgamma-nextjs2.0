import React from "react";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className=" my-20 flex justify-center items-center flex-col">
      <p className="text-md uppercase text-blue-700 font-semibold py-2">
        {" "}
        Information
      </p>
      <h1 className="text-center text-5xl">
        Contact <span className="font-bold">Us</span>{" "}
      </h1>
      <p className=" pt-6 text-xl md:mx-40 mx-10 text-center text-blue-700">
        Have a great idea? 
      </p>
      <div className="flex justify-center items-center gap-10">
        <div className="group md:w-72 w-80 h-12 rounded-md my-10  cursor-pointer flex justify-center items-center  hover:shadow-lg border border-blue-600 hover:bg-blue-600 ">
          <Link href="contactform">
            <h1 className="text-blue-600 group-hover:text-white text-xl">
              Get In Touch
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;