import React from 'react';

const associations = [
  { name: 'Sociedad de Gastroenterología', logo: '/icon/262178.svg', url: 'https://sociedad-gastro.org' },
  { name: 'Asociación Mexicana de Cirugía', logo: '/icon/logo.png', url: 'https://amc.org.mx' },
  { name: 'Consejo Mexicano de Cirugía General', logo: '/icon/logg.png', url: 'https://colegiomedico.org' },
];

const Associations = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {associations.map((association, index) => (
            <a href={association.url} key={index} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
              <img src={association.logo} alt={association.name} className="w-20 h-20 mb-4" />
              <p className="text-lg font-semibold text-gray-700">{association.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
