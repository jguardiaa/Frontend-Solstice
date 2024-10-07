import PartS1 from '@/components/Times'
import PartS from '@/components/Times'
import PartS2 from '@/components/Times2'
import PartS3 from '@/components/Times3'
import TitleS1 from '@/components/TitleS1'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import React from 'react'

const timeR = () => {
  return (
    <section>
      <Header />
      <div>
        <TitleS1 />
        <div className='w-[1000px] h-[1000px] absolute left-1/2 -translate-x-1/2 sm:top-[-28rem] sm:ml-16 sm:translate-x-0 transition-opacity duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80'>
          <img src="/assets/moon.png" alt="m" />
        </div>
      </div>
      <div className='px-10'>
      <PartS1 />
      </div>
      <div className='py-20 px-10'>
      <PartS2 />
      </div>
      <div className='py-8 px-10'>
      <PartS3 />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  )
}

export default timeR