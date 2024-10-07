import About from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";


import Link from "next/link";


export default function Home() {
  return<>
  <Header/><Hero/><About/>
  <div className="mt-[1400px]"><Footer /></div>
  </>
  ;

}
