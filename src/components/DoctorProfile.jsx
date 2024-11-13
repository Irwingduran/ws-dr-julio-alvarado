import React from 'react'
import ImgHome from "../assets/img/img6.jpg";

const DoctorProfile = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between p-20 bg-white">
          {/* Sección de texto */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl font-medium">¡Bienvenid@!</h3>
            <h1 className="text-4xl font-bold mt-2 mb-4">
              <span className=" px-2 py-1  text-backgroundColor">
             Dr. Julio Alvarado Lezama
              </span>
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
            Cirujano Gastroenterólogo
            </h2>
            <p className="text-gray-600 mb-6">
            Gastroenterología, Cirugía Oncológica Gastrointestinal, Cirugía General y Laparoscopía.            </p>
            <button className="bg-backgroundColor text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition duration-300">
              Angendar Cita
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
          </div>
    
          {/* Sección de imagen */}
          <div className="lg:w-1/2">
            <img
              src={ImgHome} // Sustituye esta URL con tu imagen de médicos
              alt="Doctors"
              className="w-full h-auto"
            />
          </div>
        </div>
      );
    }
    
    export default DoctorProfile;