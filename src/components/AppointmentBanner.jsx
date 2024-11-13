import React from 'react';

const AppointmentBanner = () => {
  return (
    <div className="relative w-full h-96 bg-gray-900 text-white">
      {/* Imagen de fondo */}
      <img
        src="https://via.placeholder.com/1200x600" // Cambia esto por la URL de tu imagen
        alt="Consultorio médico"
        className="absolute w-full h-full object-cover opacity-60"
      />

      {/* Contenido del banner */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Agenda tu cita con nosotros</h2>
        <p className="mb-6 max-w-2xl">
          Recibe atención médica de calidad y personalizada. Reserva tu cita en línea y accede al cuidado profesional que mereces.
        </p>
        <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
          Agendar cita
        </button>
      </div>

      {/* Overlay para resaltar el texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
    </div>
  );
};

export default AppointmentBanner;
