import React from 'react'

export const AboutMe = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-300">About me</p>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>Hi, Im Tom, but my friends call me "Panda". Nice to meet you.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, labore ipsam obcaecati dolore quaerat magnam praesentium expedita illum maiores vero tempore magni quam beatae? Nisi maxime laborum similique ullam nam.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
