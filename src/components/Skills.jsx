import React from 'react'
import { ImagesDiv } from '../data/ImagesDiv'

export const Skills = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold border-b-4 border-yellow-300">Experience</p>
                <p className="py-4">These are the technologies i've worked with </p>
            </div>
            <ImagesDiv/>
        </div>
    </div>
  )
}
