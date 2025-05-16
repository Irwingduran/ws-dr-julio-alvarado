import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineCalendar } from "react-icons/ai";
import ScrollToHash from "../utils/ScrollToHash";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  
  const closeForm = () => {
    setShowForm(false);
  };

  const handleAppointment = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5212224809611&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <ScrollToHash/>
      <div>
        {/* Encabezado principal */}
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-lg">
          <div className="flex flex-row items-center cursor-pointer gap-3">
            <a href="/#home" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo del Dr. Julio Alvarado Lezama"
                className="h-20 w-20 object-contain"
              />
              <h1 className="text-2xl font-semibold">Dr. Julio Alvarado Lezama</h1>
            </a>
          </div>

          {/* Navegación principal */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <a href="/" className="hover:text-hoverColor transition-all">
              Inicio
            </a>
            <a href="/#about" className="hover:text-hoverColor transition-all">
              Conóceme
            </a>
            <a href="/#services" className="hover:text-hoverColor transition-all">
              Servicios
            </a>
            <a href="/#resenas" className="hover:text-hoverColor transition-all">
              Reseñas
            </a>
            <a href="/#contact" className="hover:text-hoverColor transition-all">
              Contacto
            </a>
          </nav>

          {/* Botón Agendar Cita - Versión escritorio */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleAppointment}
              className="flex items-center gap-2 bg-white text-backgroundColor px-5 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <AiOutlineCalendar size={20} />
              Agendar Cita
            </button>
          </div>

          {/* Menú móvil */}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <a href="/#home" onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Inicio
          </a>
          <a href="/#about" onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Conóceme
          </a>
          <a href="/#services" onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Servicios
          </a>
          <a href="/#resenas" onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Reseñas
          </a>
          <a href="/#contact" onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Contacto
          </a>

          {/* Botón Agendar Cita - Versión móvil */}
          <div className="lg:hidden mt-4 flex justify-center">
            <button
              onClick={() => {
                handleAppointment();
                closeMenu();
              }}
              className="flex items-center justify-center gap-2 bg-white text-backgroundColor px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <AiOutlineCalendar size={20} />
              Agendar Cita
            </button>
          </div>
        </div>

        {showForm && <Contact closeForm={closeForm} />}
      </div>
    </div>
  );
};

export default Navbar;