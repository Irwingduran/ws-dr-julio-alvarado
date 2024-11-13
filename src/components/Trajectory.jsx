import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Trajectory = () => {
  return (
    <section className="min-h-screen py-16 px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trayectoria</h2>
          <p className="text-lg text-gray-600">
            El Dr. Julio Alvarado es un especialista reconocido por su
            amplia experiencia y dedicación a sus pacientes. Con un enfoque en
            prácticas modernas y cuidado personalizado, ha contribuido a la
            medicina con logros y actualizaciones constantes.
          </p>
        </div>

        {/* Línea de tiempo de trayectoria */}
        <div className="relative border-l-4 border-teal-500">
          {trajectoryData.map((item, index) => (
            <TrajectoryCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrajectoryCard = ({ icon, title, description }) => {
  return (
    <div className="mb-10 ml-8 relative">
      <div className="flex items-center mb-3">
        <div className="flex justify-center items-center w-10 h-10 bg-teal-500 text-white rounded-full">
          {icon}
        </div>
        <div className="absolute left-0 top-5 w-1 h-full bg-teal-500"></div>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const trajectoryData = [
  { icon: <RiMicroscopeLine size={24} />, title: "Sociedad de Gastroenterología del Estado de Puebla", description: "2006-2012" },
  { icon: <MdHealthAndSafety size={24} />, title: "Asociación Mexicana de Gastroenterología", description: "2000-20XX" },
  { icon: <FaHeartbeat size={24} />, title: "Certificado por el Consejo Mexicano de Cirugía General", description: "2000-20XX" },
  { icon: <MdHealthAndSafety size={24} />, title: "Recertificación por el Consejo Mexicano de Cirugía General", description: "2000-20XX" },
  { icon: <RiMicroscopeLine size={24} />, title: "Médico adscrito en el Departamento de Cirugía Gastrointestinal", description: "2000-20XX" },
  { icon: <FaHeartbeat size={24} />, title: "Curso Internacional de Actualización en Cirugía General", description: "2000-20XX" },
  { icon: <MdHealthAndSafety size={24} />, title: "Curso Internacional de Hígado, Páncreas y Vías Biliares", description: "2000-20XX" },
  { icon: <FaHeartbeat size={24} />, title: "Curso de actualización en Colón, recto y ano", description: "20XX" },
  { icon: <RiMicroscopeLine size={24} />, title: "Diplomado de Actualización Médica. La Salle 2005", description: "20XX" },
];

export default Trajectory;
