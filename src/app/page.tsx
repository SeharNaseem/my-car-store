"use client"
import React, { useState } from 'react';
import Header from "@/app/component/HeroSection"
import PopularCars from "@/app/component/popularCars"
 import Link from "next/link";
import HomeDataJson from "@/app/data/home.json"

export default function Home() {
  const [HomeData, setHomeData] = useState(HomeDataJson);

  return (
  <>
  <Header/>
  <PopularCars column={"8"} Data={HomeData} grid={"xl:grid-cols-4"} color={"#0B5CFF"} textColor={'text-[#FFFFFF]'} />
     
  </>
  );
}
