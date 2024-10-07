import { Header } from '@/sections/Header'
import React from 'react'
import starsBg from '/public/assets/stars.png'
import { Footer } from '@/sections/Footer'

const page = () => {
  return (
    <section style={{
      backgroundImage: `url(${starsBg.src})`
    }} >
      <Header />

      <h1 className="text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-[radial-gradient(280%_200%_at_top_left,white,gray,black)] text-center py-[50px] relative">
    What We Used
    <span className="absolute inset-0 bg-[radial-gradient(55%_55%_at_center_center,rgb(255,255,255,.5)_15%,rgb(0,0,0,.5)_78%,transparent)]"></span>
</h1>
<div className=" border-t border-gray-700 mb-10 w-1/2 mx-auto"></div>

<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Here at Solstice we focus on using the most precise data and reliable sources to help educate the world</p>

<p className="max-w-md space-y-1 text-gray-500 list-insidez dark:text-gray-400 text-center flex justify-between px-[550px]">
    <div className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://ssd.jpl.nasa.gov/planets/approx_pos.html">https://ssd.jpl.nasa.gov/planets/approx_pos.html</a>
         </div>
         </div>
</p>
<p className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between ml-[550px] ">
    <div className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://nasa.github.io/mission-viz/RMarkdown/Elliptical_Orbit_Design.html ">https://nasa.github.io/mission-viz/RMarkdown/Elliptical_Orbit_Design.html </a>
         </div>
    </div>
</p>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.solarsystemscope.com/textures/">https://www.solarsystemscope.com/textures/</a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between ml-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.rmg.co.uk/stories/topics/solar-system-data">https://www.rmg.co.uk/stories/topics/solar-system-data </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://tools.wwwtyro.net/space-3d/index.html">https://tools.wwwtyro.net/space-3d/index.html</a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between ml-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.nasa.gov/history/175-years-ago-astronomers-discover-neptune-the-eighth-plane t/">https://www.nasa.gov/history/175-years-ago-astronomers-discover-neptune-the-eighth-planet/</a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://artsandsciences.syracuse.edu/2024-eclipse/the-first-predicted-eclipse/
">https://artsandsciences.syracuse.edu/2024-eclipse/the-first-predicted-eclipse/
         </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catal og/messier-1/
">https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catal og/messier-1/
         </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.nasa.gov/history/955-years-ago-halleys-comet-and-the-battle-of-hastings/
">https://www.nasa.gov/history/955-years-ago-halleys-comet-and-the-battle-of-hastings/
         </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.britannica.com/place/Keplers-Nova

">https://www.britannica.com/place/Keplers-Nova

         </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.nasa.gov/history/410-years-ago-galileo-discovers-jupiters-moons/


">https://www.nasa.gov/history/410-years-ago-galileo-discovers-jupiters-moons/

         </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.skyatnightmagazine.com/space-science/dwarf-planet-ceres


">https://www.skyatnightmagazine.com/space-science/dwarf-planet-ceres
         </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.rocketstem.org/2020/09/28/ice-and-stone-comet-of-week-40/


">https://www.rocketstem.org/2020/09/28/ice-and-stone-comet-of-week-40/
         </a>
         </div>
    </li>
</ul>
<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 text-center flex justify-between px-[550px]">
    <li className="flex items-center">
        <svg className="w-3.5 h-3.5 me-2 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
         <div className='hover:text-purple-400'>
         <a href="https://www.nasa.gov/history/115-years-ago-the-tunguska-asteroid-impact-event/


">https://www.nasa.gov/history/115-years-ago-the-tunguska-asteroid-impact-event/
         </a>
         </div>
    </li>
</ul>
<div className=''>
<Footer />
</div>
    </section>
  )
}

export default page