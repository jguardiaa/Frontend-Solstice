import React from 'react'
import starsBg from '/public/assets/stars.png'

const ContentL1 = () => {
  return (
    <section style={{
      backgroundImage: `url(${starsBg.src})`
    }} >
      
      <h1 className="bg-gradient-to-r from-purple-500 via-purple-200 to-purple-100 bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold text-center px-[150px] py-10">
    Beginner (5-11 yrs)
  </h1>
  <div className="grid md:grid-cols-2 gap-8">
            <div className=" border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">What is the Sun?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The Sun is a big, bright ball of fire up in the sky. It gives us light and warmth, which helps plants grow and keeps us warm.
                ● Fun Fact: The Sun is actually a star! Just like the tiny stars we see at night, the Sun is also made of burning gases, but it looks bigger because it’s much closer to Earth than other stars.</p>
  
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Why is the Sun Important?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Without the Sun, everything would be dark, cold, and nothing could grow.
● The Sun’s light helps plants make food through a process called photosynthesis,
which gives us oxygen to breathe!</p>

            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">How Big is the Sun?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The Sun is HUGE! It’s much bigger than Earth. You could fit over a million Earths inside the Sun.</p>
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">What is the Moon?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The Moon is Earth’s closest neighbor in space. It doesn’t shine on its own like the Sun, but we can see it because it reflects sunlight.</p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className=" border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Does the Moon Change Shape?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Sometimes, you see a big, round Moon, and sometimes you see only a part of it. That’s because the Moon goes through different phases as it moves around Earth.
● Phases of the Moon:
○ New Moon: You can't see the Moon because it's between the Earth and the
Sun.
○ Crescent Moon: You see a tiny sliver of the Moon.
○ Half Moon (First Quarter): You see half of the Moon.
○ Full Moon: You see the whole round Moon!</p>
  
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Why Does the Moon Change?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">As the Moon moves around Earth, different parts of it reflect sunlight, which is why it looks like it's changing shape.</p>

            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">What Are Stars?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Stars are huge balls of gas, just like the Sun, but they are so far away from us that they look like tiny dots in the night sky.
                ● Fun Fact: Some stars are even bigger than the Sun, but they are much farther away, so they look small.</p>
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Why Do Stars Twinkle?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The stars look like they’re twinkling because their light has to pass through Earth’s atmosphere (the air around us). The atmosphere makes the light bounce around a little, which makes the stars seem like they’re twinkling.</p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className=" border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">What is a Constellation?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">A constellation is a group of stars that form a pattern or picture in the sky. People long ago made up stories about these patterns. For example, Orion looks like a hunter, and The Big Dipper looks like a spoon.</p>
  
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Why Do We Have Day and Night?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The Earth is always spinning, like a top! When your part of Earth is facing the Sun, it’s daytime, and when your part turns away from the Sun, it’s nighttime.
                </p>

            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">How Long Does it Take for Earth to Spin?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">It takes 24 hours (one whole day) for Earth to spin around completely. That’s why we
                have both day and night every day! Fun Example:
                ● Imagine you are standing on Earth, and a big lamp is shining on you. That’s like the Sun. If you spin around, there will be times when the lamp is shining on your face (daytime), and other times when your back is to the lamp (nighttime).</p>
            </div>
            <div className="bg-black border border-purple-500 rounded-lg p-8 md:p-12">
                
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">How Does Earth Move?</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Earth is also moving around the Sun in a big circle, but it takes one whole year to make that trip.
● This is different from the spinning that causes day and night. The movement around the Sun is called an orbit.
Fun Activity:
● Spin and See: Have students stand up and spin around slowly, pretending they are Earth. When they face the "Sun" (a light or another student holding a lamp), it's day for them. When they turn away, it’s night!</p>
            </div>
        </div>
        
        


    </section>
  )
}

export default ContentL1