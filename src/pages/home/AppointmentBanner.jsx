import React from 'react';

const AppointmentBanner = () => {
  return (
    <div className="w-full">
      {/* Banner principal */}
      <div
        className="mt-20 relative w-full h-96 bg-gray-900 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/JA2.png')", 
        }}>
        {/* Contenido del banner */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Agenda tu cita</h2>
          <p className="mb-6 max-w-2xl">
            Recibe atención médica de calidad y personalizada. Reserva tu cita en línea y accede al cuidado profesional que mereces.
          </p>
          <a href="https://api.whatsapp.com/send/?phone=5212224809611&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" target="_blank">
            <button className="px-8 py-3 bg-backgroundColor hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Agendar cita
            </button>
          </a>
        </div>
        {/* Overlay para resaltar el texto */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      </div>
      {/* Sección del mapa */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 my-16">Ubicación del Consultorio</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.417015668337!2d-98.20784272479541!3d19.0453941821529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAyJzQzLjQiTiA5OMKwMTInMTkuMCJX!5e0!3m2!1ses!2smx!4v1736381240667!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Consultorio Ubicación"
          ></iframe>
        </div>
        <p className="mt-4 text-gray-600">Visítanos en nuestra ubicación para consultas y atención médica personalizada.</p>
        <p className="mt-4 text-gray-600">Hospital UPAEP, Consultorio 4, Puebla, Pue.</p>
      </div>
    </div>
  );
};

export default AppointmentBanner;
