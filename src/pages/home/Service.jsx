import React from "react";

const Service = () => {
  return (
    <section className="min-h-screen px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Servicios</h2>
          <p className="text-lg text-gray-600">
            Servicios de alta calidad y atención personalizada para cuidar de tu salud y bienestar.
          </p>
        </div>
        
        {/* Tarjetas de servicios principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <ServiceCard 
            title="Apendicitis" 
            description="Diagnóstico y tratamiento especializado para apendicitis aguda."
            image="/img/service3.webp"
            link="/Service"
          />
          <ServiceCard 
            title="Cáncer del Colon" 
            description="Detección y manejo integral del cáncer de colon."
            image="/img/service2.webp"
            link="/Service"
          />
          <ServiceCard 
            title="Cáncer del Estómago" 
            description="Tratamiento especializado para el cáncer gástrico."
            image="/img/service1.webp"
            link="/Service"
          />
        </div>

        {/* Sección de otros servicios */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Otros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cáncer del páncreas",
              "Colecistitis aguda",
              "Coledocolitiasis",
              "Diverticulitis",
              "Enfermedad del reflujo gastroesofágico",
              "Enfermedad inflamatoria intestinal",
              "Hernia inguinal",
              "Pancreatitis",
              "Síndrome del colon irritable (IBS)"
            ].map((service, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-backgroundColor"></div>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <a href={link}>
    <div className="group mt-1 relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      {/* Imagen de fondo con overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent group-hover:from-teal-900/80 transition-all duration-300"></div>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-6 bg-white relative">
        <h3 className="text-2xl font-bold text-gray-700 mb-3 group-hover:text-[#b0e648] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
        
        {/* Botón "Leer más" */}
        <div className="mt-4 flex items-center text-[#] font-medium">
          <span className="mr-2">Leer más</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      
      {/* Barra decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-backgroundColor"></div>
    </div>
    </a>
  );
};

export default Service;