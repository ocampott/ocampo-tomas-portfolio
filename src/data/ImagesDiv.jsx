import React from 'react'

export const ImagesDiv = () => {

    const images = [
        {id: 1,
        name: "HTML",
        img: './html.png'},
        {id: 2,
        name: "CSS",
        img: "./css.png"},
        {id: 3,
        name: "Javascript",
        img: "./javascript.png"},
        {id: 4,
        name: "React",
        img: "./react.png"},
        {id: 5,
        name: "Github",
        img: "./github.png"},
        {id: 6,
        name: "Node JS",
        img: "./node.png"},
        {id: 7,
        name: "Tailwind",
        img: "./tailwind.png"},
        {id: 8,
        name: "SASS",
        img: "./sass.png"}
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
