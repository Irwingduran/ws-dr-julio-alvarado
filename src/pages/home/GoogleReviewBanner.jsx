import React from "react";

const GoogleReviewBanner = () => {
  return (
    <div className="mt-12 p-8 bg-backgroundColor rounded-2xl shadow-lg text-center">
      <h3 className="text-3xl font-bold text-white mb-4">¡Tu opinión es importante!</h3>
      <p className="text-lg text-white mb-6">
        Ayúdanos a mejorar compartiendo tu experiencia en Google.
      </p>
      <a
        href="https://www.google.com.mx/maps/place/Dr.+Julio+Alvarado+Lezama,+Cirujano+general/@19.0454884,-98.207859,17z/data=!4m8!3m7!1s0x85cfc1d763201781:0x6f6c27763a851932!8m2!3d19.0454884!4d-98.2052841!9m1!1b1!16s%2Fg%2F11h4c6y6g9?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-white text-backgroundColor px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-200"
      >
        <span>Dejar un comentario</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default GoogleReviewBanner;
