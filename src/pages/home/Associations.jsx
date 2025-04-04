import React from 'react';

const associations = [
  { name: 'Sociedad de Gastroenterología', logo: '/icon/262178.svg'},
  { name: 'Asociación Mexicana de Cirugía', logo: '/icon/logo.png' },
  { name: 'Consejo Mexicano de Cirugía General', logo: '/icon/logg.png' },
];

const Associations = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {associations.map((association, index) => (
            <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
              <img src={association.logo} alt={association.name} className="w-20 h-20 mb-4" />
              <p className="text-lg font-semibold text-gray-700">{association.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;
