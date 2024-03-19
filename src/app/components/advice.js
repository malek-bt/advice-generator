"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Advice = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setData(response.data.slip);
      console.log(response.data.slip);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-grasieshBlue w-[90%] mx-auto rounded-2xl text-center font-monrope h-80 flex flex-col justify-evenly relative max-w-lg shadow-xl cursor-pointer transform transition-transform  hover:scale-105">
      <p className="text-neon tracking-[3px] text-sm">ADVICE #{data.id}</p>
      <h1 className="text-white font-extrabold text-lg md:text-2xl px-4">
        "{data.advice}"
      </h1>
      <div className="flex justify-center mb-8">
        <img src="pattern-divider-mobile.svg"></img>
      </div>
      <div
        className="bg-neon w-14 h-14 rounded-[50%] flex justify-center items-center absolute top-72 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={fetchData}
      >
        <img src="icon-dice.svg"></img>
      </div>
    </div>
  );
};

export default Advice;
