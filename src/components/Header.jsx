import React from "react";

const Header = () => {
  return (
    <div className="bg-[#0A2540]  p-5 m-15 mx-30 rounded-md ">
      <nav className="flex justify-between mx-40 items-center">
        <picture className="">
          <h2 className=" text-white">LOGO</h2>
        </picture>

        <ul className="flex text-white items-center ">
          <div className="flex gap-6">
            <li> Home </li>
            <li> About </li>
            <li> How it works </li>
          </div>
        </ul>

        <ul>
          <div className="flex ml-5 gap-6">
            <li className=" border-4 border-[#ffffff]] p-4 text-[#ffffff] rounded-sm">
              Start transaction
            </li>
            <li className=" bg-white p-4 text-[#0A2540] rounded-sm">
              {" "}
              Sign Up{" "}
            </li>
            <li className=" p-4 text-[#ffffff] rounded-sm"> FAQ's </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
