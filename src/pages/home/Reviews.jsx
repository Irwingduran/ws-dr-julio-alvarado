import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa"; // Importa FaStar
import GoogleReviewBanner from "./GoogleReviewBanner"; // Importa el nuevo componente

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsData = [
    {
      name: "Faby Herrerias",
      review: "Un gran doctor, me ayudó mucho , llevaba un mes con un problema por una bacteria, me dió el tratamiento adecuado y me solucionó. En su consulta es atento, hace muy amena la consulta, entras espantado y sales con buen ánimo.",
      date: "Marzo 2024",
      rating: 5, // Agrega una propiedad de rating
    },
    {
      name: "Angelica Medina",
      review: "Es uno de los mejores especialistas que he conocido. Gastroenterólogo Cirujano de Primera, excelente ser humano. En Puebla.",
      date: "Enero 2024",
      rating: 5, // Agrega una propiedad de rating
    },
    {
      name: "Mayra Rangel",
      review: "¡Simplemente es un excelente doctor! ¡Muy recomendado!",
      date: "Febrero 2024",
      rating: 5, // Agrega una propiedad de rating
    },
  ];

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  // Función para renderizar las estrellas
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-36 px-8 bg-white" id="resenas">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Opiniones de Pacientes</h2>
        <div className="relative bg-white shadow-lg rounded-2xl p-10">
          <FaQuoteLeft className="text-[#b0e648] text-4xl mb-4" />
          <p className="text-lg italic text-gray-700 mb-6">
            "{reviewsData[currentReview].review}"
          </p>
          <h4 className="text-2xl font-semibold text-[#b0e648]">
            {reviewsData[currentReview].name}
          </h4>
          {/* Renderiza las estrellas */}
          <div className="flex justify-center items-center gap-1 my-2">
            {renderStars(reviewsData[currentReview].rating)}
          </div>
          <p className="text-sm text-gray-500">{reviewsData[currentReview].date}</p>

          {/* Botones de navegación */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="bg-backgroundColor text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200"
            >
              &#8592; Anterior
            </button>
            <button
              onClick={handleNext}
              className="bg-backgroundColor text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition duration-200"
            >
              Siguiente &#8594;
            </button>
          </div>
        </div>

        {/* Usa el componente GoogleReviewBanner */}
        <GoogleReviewBanner />
      </div>
    </section>
  );
};

export default Reviews;