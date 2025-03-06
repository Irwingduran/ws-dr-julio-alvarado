import React from "react";

const GoogleReviewBanner = () => {
  return (
    <div className="mt-12 p-8 bg-backgroundColor rounded-2xl shadow-lg text-center">
      <h3 className="text-3xl font-bold text-white mb-4">¡Tu opinión es importante!</h3>
      <p className="text-lg text-white mb-6">
        Ayúdanos a mejorar compartiendo tu experiencia en Google.
      </p>
      <a
        href="https://www.google.com/search?q=julio+alvarado+lezama&oq=julio+alvarado+lezama&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMggIAhAAGBYYHjIKCAMQABiABBiiBDIKCAQQABiABBiiBDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPdIBCDMzODNqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
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