import React from 'react'
import Typewriter from 'typewriter-effect'

export const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-yellow-300">Hi! My name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Tomas Ocampo</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"><Typewriter options={{strings: ["I'm a Front End Developer."], autoStart: true, loop: true}} /></h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
                I'm currently constantly learning new technologies and really excited to advance in this world, always looking forward to new challenges.
            </p>
            <div>
                <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300">
                    Take a look at my projects!
                </button>
            </div>
        </div>
    </div>
  )
}
