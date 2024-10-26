import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Doctor</h1>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis vel molestiae distinctio amet provident quis tempora nisi, recusandae 
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Sobre</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Sobre
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Servicios
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Ubicación
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Servicio</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Agendar cita
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Chequeo general
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Salud 
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contacto</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              ubicacion 
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              email@tudominio.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor"> Delta Agency</span> | Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
