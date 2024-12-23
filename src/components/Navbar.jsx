import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu, AiOutlineCalendar } from "react-icons/ai";


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

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        {/* Encabezado principal */}
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-lg">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold">Dr. Julio Alvarado Lezama</h1>
            </Link>
          </div>

          {/* Navegación principal */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Inicio
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Conóceme
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Servicios
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Contacto
            </Link>
            
          </nav>

          {/* Botón Agendar Cita */}
          <div className="hidden lg:flex">
            <button
              onClick={openForm}
              className="flex items-center gap-2 bg-teal-700 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <AiOutlineCalendar size={20} />
              Agendar Cita
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

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
          <Link to="home" spy={true} smooth={true} duration={500} onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Inicio
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Conóceme
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Servicios
          </Link>
          <Link to="doctors" spy={true} smooth={true} duration={500} onClick={closeMenu} className="hover:text-hoverColor transition-all">
            Contacto
          </Link>
          

          {/* Botón Agendar Cita en móvil */}
          <div className="lg:hidden mt-4 flex justify-center">
          <button
          onClick={openForm}
           className="flex items-center justify-center gap-2 bg-teal-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
           >
          <AiOutlineCalendar size={20} />
          Agendar Cita
        </button>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
