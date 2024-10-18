import React from "react";
import Button from "./reuse/Button";
import img1 from "@/public/images/asset1.png";
import Image from "next/image";

export default function () {
  return (
    <section className="h-[520px] max-sm:min-h-screen  bg-blue-900 grid max-sm:overflow-hidden max-sm:grid-cols-1 gap-2 grid-cols-2 ">
      <div className="px-7 max-sm:px-1 h-auto flex justify-center items-center ">
        <div className="max-sm:mx-3" >

        <h1 className="text-5xl max-sm:text-[25px] max-sm:leading-7 max-sm:tracking-wide max-sm:my-7  text-white font-semibold ">
          Advanced Digital Marketing Course in Guwahati
        </h1>
        <p className=" text-white text-[15px]  my-5">
          {" "}
          Carve your Future with the best Digital Marketing courses in Northeast
          and explore the endless possibilities. Join Today!
        </p>
        <div className="flex items-center gap-4">
          <Button button={"join Today"} className={"bg-white font-medium"} />
          <Button
            button={"Download Prospectus"}
            className={"bg-yellow-300 font-medium "}
            />
            </div>
        </div>
      </div>
      <div className="flex h-auto">
        <Image
          src={img1}
          width={600}
          height={600}
          alt="img"
          className=" object-cover"
        />
      </div>
      
    </section>
  );
}
