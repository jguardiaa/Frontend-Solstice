
import TitleS2 from '@/components/Title2'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import React from 'react'

const page = () => {
  return (
    <section>
      <Header />
      <TitleS2 />
      <div className='py-[80px]'>
      <Footer />
      </div>
    </section>
  )
}

export default page