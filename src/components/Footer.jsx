import React from "react";
import { FaFacebookF, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 md:px-32 px-5">
        {/* Sobre el doctor con logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo del Dr. Julio Alvarado Lezama"
              className="h-16 w-16 object-contain"
            />
            <a href="/">
              <h1 className="font-semibold text-xl">Dr. Julio Alvarado Lezama</h1>
            </a>
          </div>
          <p className="text-sm">
            El doctor es miembro de las más importantes sociedades de cirugía general en el mundo.
          </p>
          
          {/* Botón WhatsApp fijo para móviles */}
          <div className="lg:hidden mt-4">
            <a
              href="https://wa.me/522224809611"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full w-fit hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp size={20} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
        
        {/* Servicios */}
        <div>
          <h1 className="font-medium text-xl pb-4">Servicios</h1>
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
            <a href="mailto:surgery_allez@yahoo.com.mx" className="hover:text-hoverColor flex items-start gap-2">
              <span>📧</span>
              <span>surgery_allez@yahoo.com.mx</span>
            </a>
            <a href="tel:+522222576989" className="hover:text-hoverColor flex items-start gap-2">
              <span>📞</span>
              <span>
                +52 222 257 6989 <br /> 
                <span className="text-sm">Hospital UPAEP</span>
              </span>
            </a>
            <a 
              href="https://wa.me/522224809611" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-hoverColor flex items-start gap-2"
            >
              <span>💬</span>
              <span>
                +52 222 480 9611 <br /> 
                <span className="text-sm">Urgencias y WhatsApp</span>
              </span>
            </a>
          </nav>
        </div>

        {/* Dirección y redes sociales */}
        <div>
          <h1 className="font-medium text-xl pb-4">Dirección</h1>
          <div className="flex flex-col gap-2 mb-6">
            <p>Hospital UPAEP</p>
            <p>Consultorio 4</p>
            <p>Puebla, Pue.</p>
          </div>

          {/* Redes sociales */}
          <div>
            <h2 className="font-medium text-lg pb-3">Síguenos</h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="tel:522222576989"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all"
                aria-label="Llamar"
              >
                <FaPhone size={18} />
              </a>
              <a
                href="https://wa.me/522224809611"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hidden lg:block"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="border-t border-gray-700 mt-4">
        <p className="text-center py-4 text-sm">
          &copy; {new Date().getFullYear()} Dr. Julio Alvarado Lezama | Desarrollado por {" "}
          <a 
            href="https://marketingmedicos.com.mx/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-hoverColor hover:underline"
          >
            Imagen Médica
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;