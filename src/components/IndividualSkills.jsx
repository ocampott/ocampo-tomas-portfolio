import React from 'react'

export const IndividualSkills = () => {

    const images = [
        {id: 1,
        name: "HTML",
        img: "./assets/html.png"},
        {id: 2,
        name: "CSS",
        img: "./assets/css.png"},
        {id: 3,
        name: "Javascript",
        img: "./assets/javascript.png"},
        {id: 4,
        name: "React",
        img: "./assets/react.png"},
        {id: 5,
        name: "Github",
        img: "./assets/github.png"},
        {id: 6,
        name: "Bootstrap",
        img: "./assets/bootstrap.png"},
        {id: 7,
        name: "Tailwind",
        img: "./assets/tailwind.png"},
        {id: 8,
        name: "SASS",
        img: "./assets/sass.png"}
    ]

    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {images.map((image) => (
                <div key={image.id} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={image.img} alt={image.name} />
                    <p className="my-4">{image.name}</p>
                </div>
            ))}
        </div>
    )
    
}