import React from "react";
import { FaFacebookF, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 md:px-32 px-5">
        
        {/* Sobre el doctor */}
        <div>
          <a href="/"><h1 className="font-semibold text-xl pb-4">Dr. Julio Alvarado Lezama</h1></a>
          <p className="text-sm">
            El doctor es miembro de las más importantes sociedades de cirugía general en el mundo.
          </p>
        </div>
        
        {/* Servicios */}
        <div>
          <h1 className="font-medium text-xl pb-4">Servicio</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/#services"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Todos los servicios
            </a>
            <a
              href="/#contact"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
             Contacto
            </a>
            <a
              href="/#about"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Sobre Mí
            </a>
          </nav>
        </div>

        {/* Contacto */}
        <div>
          <h1 className="font-medium text-xl pb-4">Contacto</h1>
          <nav className="flex flex-col gap-2">
            <a href="mailto:surgery_allez@yahoo.com.mx" className="hover:text-hoverColor">
              E-mail
            </a>
            <a href="tel:+522222576989" className="hover:text-hoverColor">
              +52 222 257 6989 <br /> Hospital UPAEP
            </a>
            <a href="https://wa.me/522224809611" target="_blank" rel="noopener noreferrer" className="hover:text-hoverColor">
              +52 222 480 9611 <br /> Urgencias y WhatsApp
            </a>
          </nav>
        </div>

        {/* Dirección */}
        <div>
          <h1 className="font-medium text-xl pb-4">Dirección</h1>
          <nav className="flex flex-col gap-2">
            <span>Hospital UPAEP, Consultorio 4, Puebla, Pue.</span>
          </nav>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hoverColor transition-all"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hoverColor transition-all"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="tel:522222576989"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hoverColor transition-all"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t border-gray-700 mt-4">
        <p className="text-center py-4">
          &copy; {new Date().getFullYear()} | Desarrollado por Delta{" "}
          <a href="https://marketingmedicos.com.mx/" className="text-lime-950">
          by Imagen Médica
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
