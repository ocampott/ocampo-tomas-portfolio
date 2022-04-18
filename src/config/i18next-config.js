import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es: {
            translation: {

                "home": {
                    "title": "Hola! Mi nombre es",
                    "description": "Estoy constantemente buscando aprender nuevas tecnologias y me siento muy emocionado de avanzar en este mundo, siempre buscando nuevos desafios para afrontar.",
                    "boton-1": "Mira mis proyectos!",
                    "boton-2": "Descargar CV",
                },

                "navbar": {
                    "home": "Inicio",
                    "about-me": "Sobre mi",
                    "skills": "Skills",
                    "projects": "Proyectos",
                    "contact": "Contacto"
                },

                "about-me": {
                    "about-me": "Sobre mi",
                    "text-1": "Hola! Soy Tom, pero mis amigos me dicen 'Panda'. Un gusto conocerte.",
                    "text-2": "Me considero una persona eficiente, responsable y proactiva, con facilidad de adaptación y de trabajo en equipo. Con gran capacidad de aprendizaje, mi objetivo personal es siempre brindar lo mejor de mí y superarme en todos los ámbitos."
                },

                "skills": {
                    "skills": "Skills",
                    "skills-text": "Estas son las tecnologias con las que trabaje"
                },

                "projects": {
                    "projects": "Proyectos",
                    "projects-text": "Mira mis proyectos realizados"
                },

                "contact": {
                    "contact": "Contacto",
                    "contact-text": "Llena el formulario debajo para contactar conmigo. Voy a estar esperando tu mensaje!",
                    "contact-btn": "Enviar"
                }
            }
        },

        en: {
            translation: {
                "home": {
                    "title": "Hi! My name is",
                    "description": "I'm currently constantly learning new technologies and really excited to advance in this world, always looking forward to new challenges.",
                    "boton-1": "Take a look at my projects!",
                    "boton-2": "Download my CV"
                },

                "navbar": {
                    "home": "Home",
                    "about-me": "About me",
                    "skills": "Skills",
                    "projects": "Projects",
                    "contact": "Contact"
                },

                "about-me": {
                    "about-me": "About me",
                    "text-1": "Hi, Im Tom, but my friends call me 'Panda'. Nice to meet you.",
                    "text-2": "I consider myself an efficient, responsible and proactive person, with ease of adaptation and teamwork. With great learning capacity, my personal goal is always to provide the best of me and surpass myself in all areas."
                },

                "skills": {
                    "skills": "Skills",
                    "skills-text": "These are the technologies i've worked with"
                },

                "projects": {
                    "projects": "Projects",
                    "projects-text": "Check out my projects"
                },

                "contact": {
                    "contact": "Contact",
                    "contact-text": "Submit the form below to contact me. I'll be waiting for your message!",
                    "contact-btn": "Submit"
                }
            }
        }
    }
})