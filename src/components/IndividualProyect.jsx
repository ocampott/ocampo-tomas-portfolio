import React from "react";
import OrtopediaVidaPage from '../assets/ortopediavida.jpg';
import ToDoList from "../assets/todolist.jpg"

export const IndividualProyect = () => {

  const proyects = [
    { id: 1, name: "Ortopedia Vida Page", img: OrtopediaVidaPage, demo: 'https://ocampott.github.io/ortopedia-vida-webpage-coder/', code: 'https://github.com/ocampott/ortopedia-vida-webpage-coder'},
    { id: 2, name: "To do list App", img: ToDoList, demo: 'https://ocampott.github.io/lista-de-tareas-app-react/', code: 'https://github.com/ocampott/lista-de-tareas-app-react' },
    { id: 3, name: "Ortopedia Vida Page", img: OrtopediaVidaPage, demo: 'https://ocampott.github.io/ortopedia-vida-webpage-coder/', code: 'https://github.com/ocampott/ortopedia-vida-webpage-coder' },
    { id: 4, name: "To do list App", img: ToDoList, demo: 'https://ocampott.github.io/lista-de-tareas-app-react/', code: 'https://github.com/ocampott/lista-de-tareas-app-react'},
    { id: 5, name: "Ortopedia Vida Page", img: OrtopediaVidaPage, demo: 'https://ocampott.github.io/ortopedia-vida-webpage-coder/', code: 'https://github.com/ocampott/ortopedia-vida-webpage-coder' },
    { id: 6, name: "To do list App", img: ToDoList, demo: 'https://ocampott.github.io/lista-de-tareas-app-react/', code: 'https://github.com/ocampott/lista-de-tareas-app-react'},
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {proyects.map((proyect) => (
            <div style={{backgroundImage: `url(${proyect.img})` }}className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">{proyect.name}</span>
              <div className="pt-8 text-center">
                <a href={proyect.demo} >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href={proyect.code}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
