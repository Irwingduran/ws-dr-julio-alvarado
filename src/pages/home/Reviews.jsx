import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsData = [
    {
      name: "Juan Pérez",
      review: "Muy clara y entendible la explicación. Un doctor Muy profesional.",
      date: "Marzo 2024",
    },
    {
      name: "Sofia Soto",
      review: "Excelente después de varios médicos e incluso cirujanos con el Dr. encontré respuesta y actualmente me encuentro sana ya me operó y estoy agradecida con él.",
      date: "Enero 2024",
    },
    {
      name: "Laura López",
      review: "Un gran doctor, me ayudó mucho , llevaba un mes con un problema por una bacteria, me dió el tratamiento adecuado y me solucionó. En su consulta es atento, hace muy amena la consulta, entras espantado y sales con buen ánimo.",
      date: "Febrero 2024",
    },
    {
      name: "Luis Quintero",
      review: "Excelente trato y calidad humana, pone mucha atención a uno como paciente, explica con detalle cada una de las dudas, te hace tener confianza.",
      date: "Enero 2024",
    },
    
  ];

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-36 px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Opiniones de Pacientes</h2>
        <div className="relative bg-white shadow-lg rounded-2xl p-10">
          <FaQuoteLeft className="text-teal-400 text-4xl mb-4" />
          <p className="text-lg italic text-gray-700 mb-6">
            "{reviewsData[currentReview].review}"
          </p>
          <h4 className="text-2xl font-semibold text-teal-600">
            {reviewsData[currentReview].name}
          </h4>
          <p className="text-sm text-gray-500">{reviewsData[currentReview].date}</p>

          {/* Botones de navegación */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200"
            >
              &#8592; Anterior
            </button>
            <button
              onClick={handleNext}
              className="bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200"
            >
              Siguiente &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
