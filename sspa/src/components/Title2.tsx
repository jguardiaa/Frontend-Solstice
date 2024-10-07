import React from 'react'
import Button from './Button'
import starsBg from '/public/assets/stars.png'

const TitleS2 = () => {
  return (
    

<section style={{
      backgroundImage: `url(${starsBg.src})`
    }} className=" bg-black">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-[radial-gradient(circle,_from(purple-800),_to(purple-600))] border border-white rounded-lg p-8 md:p-12 mb-8">
           
            <h1 className=" bg-gradient-to-r from-purple-500 via-purple-200 to-purple-100 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold mb-2">Our Interactive / Fun Lessons</h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Lessons based on key astronomical concepts that can help you better comprehend the cosmos that surrounds us.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className=" border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Beginner (5-11 yrs)</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Beginner-level lessons are based on concepts taught in primary schools around the world, addressing concepts ideal for younger students or anyone new to astronomy.</p>
                <a href="/lesson1" className="text-blue-600 dark:text-purple-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a>
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Intermediate (11-14 yrs)</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Intermediate-level lessons are based on concepts taught in middle school and early high school around the world, addressing concepts ideal for students who already grasp basic concepts or anyone into to astronomy.
                </p>
                <a href="/lesson2" className="text-purple-600 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Advanced (14-18 yrs)</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Advanced-level lessons are based on concepts taught in high schools and advanced courses around the world, addressing concepts ideal for experienced students or anyone knowledgeable in the field of astronomy.</p>
                <a href="/lesson3" className="text-purple-600 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        <div className='absolute w-[700px] h-[700px] right-2 translate-x-2 sm:top-[-28rem] sm:ml-16 sm:translate-x-0 transition-opacity duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-80 mt-[1200px] ml-auto '>
          <img src="/assets/planet 8.png" alt="h" />
        </div>
    </div>
</section>

    
  )
}

export default TitleS2