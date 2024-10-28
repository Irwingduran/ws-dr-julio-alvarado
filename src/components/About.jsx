import React from "react";
import img from "../assets/img/img4.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">Conoce al Doctor</h1>
        <p className=" text-justify lg:text-start">
        El Doctor Alvarado cursó la carrera de Médico Cirujano en la Universidad Popular Autónoma del Estado de Puebla (UPAEP),
         realizó la especialidad en Cirugía General, actualmente miembro certificado del Consejo Mexicano de Cirugía General, 
         así como miembro de la Sociedad de Gastroenterología del Estado de Puebla. 
         
        </p>
        <p className="text-justify lg:text-start">
        Actualmente es miembro de las más importantes sociedades de cirugía general en el mundo.
        </p>
        <p className="text-justify lg:text-start">
          
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
