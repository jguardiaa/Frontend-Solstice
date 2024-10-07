import Button from "@/components/Button";
import starsBg from "/public/assets/stars.png"
import Image from "next/image";
import About from "@/sections/About";



 const Hero = () => {
  return <section className="h-[492px] flex items-center overflow-hidden relative" style={{
    backgroundImage: `url(${starsBg.src})`
  }}
  >
    
    <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_center_center,rgb(255,255,255,.5)_15%,rgb(0,0,0,.5)_78%,transparent)]">
    <div className=" items-center flex justify-center mt-20 "><Image src="/assets/earth3.png" alt="p" width={400} height={400}/></div>
    </div>
     {/* planet */}
    
    
    {/* planet ring */}
    <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[790px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
    <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    
  

    <div className="container relative mt-16">
       
       {/* Text */}
      <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(280%_200%_at_top_left,white,gray,black)] text-transparent bg-clip-text text-center">SOLSTICE V-0</h1>
      <h2 className="text-4xl font-semibold tracking-tighter bg-white bg-[radial-gradient(280%_200%_at_top_left,white,gray,black)] text-transparent bg-clip-text text-center py-2">Made by Students for Students</h2>
      <p className="text-lg text-white/70 mt-5 text-center">The Solstice Copernican Atlas aims to display events such as Near-Earth Comets (NEC), Near-Earth Asteroids (NEA), and Potentially Hazardous Asteroids (PHA) and provides a free educational platform that intertwines theory with hands-on learning.</p>
      <div className="flex justify-center mt-10">
        <a href="https://projectsolstice.co/solar-system/"><Button>Our Model</Button></a>
      </div>
    </div>
    <div>
    </div>
  </section>;
};

export default Hero