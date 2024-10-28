import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import TrajectoryCard from "../layouts/TrajectoryCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Trajectory = () => {
  const icon1 = (
    <RiMicroscopeLine size={45} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Trayectoría
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Ver más" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        < TrajectoryCard icon={icon2} title="Sociedad de Gastroenterología del Estado de Puebla" />
        < TrajectoryCard icon={icon2} title="Asociación Mexicana de Gastroenterología" />
        < TrajectoryCard icon={icon2} title="Certificado por el Consejo Mexicano de Cirugía General" />
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
      < TrajectoryCard icon={icon2} title="Recertificación por el Consejo Mexicano de Cirugía General" />
      < TrajectoryCard icon={icon2} title="Médico adscrito en el Departamento de Cirugía Gastrointestinal" />
    </div>
    <h1 className=" text-4xl font-semibold text-center lg:text-start m-4">
    Constante actualización
          </h1>
          <p className=" mt-2 text-center lg:text-start">
           El compromiso del doctor se refleja en la constante actualización.
          </p>

          <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        < TrajectoryCard icon={icon2} title="Curso Internacional de Actualización en Cirugía General" />
        < TrajectoryCard icon={icon2} title="Curso Internacional de Hígado, Páncreas y Vías Biliares" />
        < TrajectoryCard icon={icon2} title="Curso de actualización en Colón, recto y ano" />
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
      < TrajectoryCard icon={icon2} title="Diplomado de Actualización Médica. La Salle 2005" />
     
    </div>
    </div>
  );
};

export default Trajectory;
