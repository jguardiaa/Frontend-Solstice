import { Header } from '@/sections/Header'
import React from 'react'
import starsBg from '/public/assets/stars.png'
import Lt from '@/components/Lt'
import Lt1 from '@/components/Lt1'
import { Footer } from '@/sections/Footer'

const Expand = () => {
  return (
    <section style={{
      backgroundImage: `url(${starsBg.src})`
    }}>
      <Header />
      <div>

<h1 className="mb-4 align px-[300px] py-[50px] text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-white">Better Management </span> in the Foreseeable Future.</h1>
<div className='px-[150px]'>
  <div className='text-3xl py-6 font-bold'>Ensuring <span className='text-transparent bg-clip-text bg-gradient-to-r to-white from-purple-400'>Monetary <span className='text-transparent bg-clip-text bg-gradient-to-r to-white from-purple-400'>Viability</span></span></div>
  <Lt />
  <br />
  <div className='text-3xl py-6 font-bold'>Educational  <span className='text-transparent bg-clip-text bg-gradient-to-r to-white from-purple-400'>Expansion </span></div>
  <Lt1 />
  <div className=' w-[500px] h-[500px] absolute right-2 translate-x-2 sm:top-[-28rem] sm:ml-16 sm:translate-x-0 transition-opacity duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80 mt-[700px] ml-auto '>
  <img src="/assets/planet5.png" alt="planet4" />
</div>
<div className='py-[100px]'>
<Footer />
</div>
</div>
      </div>
      </section>
  )
}

export default Expand