import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Dr. Julio Alvarado Lezama</h1>
          <p className=" text-sm">
           El doctor es miembro de las más importantes sociedades de cirugía general en el mundo.
          </p>
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
              Todos los servicios
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Agendar una cita
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
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contacto</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
            surgery_allez@yahoo.com.mx
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
            +52 222 257 6989 Hospital UPAEP <br /> Lunes a Viernes 10:00 a 14:00 hrs y 16:00 a 20:00 hrs (Llamada)
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
            +52 222 480 9611  <br /> (Urgencias y WhatsApp)
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Dirección</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
            Hospital UPAEP, Consultorio 4, Puebla, Pue.
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
        &copy; Copyright | Desarrollador por
         <a href="https://delta-digital.com.mx">
         <span className=" text-hoverColor"> Delta Agency</span> 
          </a> 
        </p>
      </div>
    </div>
  );
};

export default Footer;
