import React from 'react'
import { useTranslation } from 'react-i18next';

export const AboutMe = () => {

    const { t } = useTranslation();

  return (
    <div name="about-me" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-300">{t("about-me.about-me")}</p>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>{t("about-me.text-1")}</p>
                </div>
                <div>
                    <p>{t("about-me.text-2")}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
