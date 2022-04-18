import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export const Home = () => {

    const { t } = useTranslation()

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-yellow-300">{t("home.title")}</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Tomas Ocampo</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"><Typewriter options={{strings: ["I'm a Front End Developer.", "Soy un desarrollador Front End."], autoStart: true, loop: true}} /></h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">{t("home.description")}</p>
            <div>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300">
                    {t("home.boton-1")}
                    </button>
                </Link>
                <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-300 hover:border-yellow-300">
                    {t("home.boton-2")}
                </button>
            </div>
        </div>
    </div>
  )
}
