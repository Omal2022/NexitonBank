import React from "react";
import LandingPageText from "./LandingPageText";

const LandingPage = () => {
  console.log();
  return (
    <>
      <div className="flex items-center justify-between mx-30">
        <div className=" ">
          <h1 className="font-semibold text-[90px]/[1.2] mb-6 w-[9em] text-[#0A2540] mt-20 ml-15">
            Where your money waits, <LandingPageText />
          </h1>
          <p className="text-xl/[1.5] font-medium text-[#494949] ml-15">
            With Nexiton, your money stays safe — until the deal is real. <br />
            Escrow-based payments designed to protect you from fraud and false
            promises.
          </p>
        </div>
        <picture className="w-[1000px] ">
          <img src="/public/26857366_7163695.svg" alt="" />
        </picture>
      </div>
    </>
  );
};

export default LandingPage;
