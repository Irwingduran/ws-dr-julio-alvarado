import React from 'react'
import imgAbout from "../../assets/img/img4.png";

const AboutSection = () => {
    return (
        <section className="bg-gray-100 py-12 px-6 lg:px-24">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
            {/* Imagen del doctor */}
            <div className="lg:w-3/4 mb-8 lg:mb-0">
              <img
                src={imgAbout}// Reemplaza con la URL de la imagen del doctor
                alt="Dr. Achiri Goldberg"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            {/* Descripción sobre el doctor */}
            <div className="lg:w-2/3 lg:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre el Dr. Julio Alvarado</h2>
              <p className="text-gray-700 mb-6">
              El Dr. Julio Alvarado Lezama es Médico Cirujano egresado de la UPAEP con especialidad en Cirugía General. Está certificado y recertificado por el Consejo Mexicano de Cirugía General, y es miembro de la Sociedad de Gastroenterología del Estado de Puebla y la Asociación Mexicana de Gastroenterología.
              </p>
              <p className="text-gray-700 mb-6">
              Su experiencia incluye su rol como Médico adscrito en el Departamento de Cirugía Gastrointestinal, además de una constante actualización en cursos especializados en Hígado, Páncreas, Colón y Cirugía Endoscópica.
              </p>
              <p className="text-gray-700 mb-6">
              Ha compartido sus conocimientos en ponencias como “Cáncer de Páncreas”, destacando su compromiso con la excelencia médica y el bienestar de sus pacientes. 
              </p>
              <a href="https://api.whatsapp.com/send/?phone=5212224809611&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" target="_blank">
              <button className="bg-backgroundColor text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition duration-300">
              Contáctame
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 3.293a1 1 0 011.414 0l3.5 3.5a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414-1.414L14.586 8H6a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            </a>
            </div>
          </div>
        </section>
      );
    }
    
    export default AboutSection;
