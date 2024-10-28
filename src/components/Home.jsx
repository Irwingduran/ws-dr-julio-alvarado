import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/img3.jpg')] bg-no-repeat bg-cover bg-center opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Cirujano Gastroenterólogo
        </h1>
        <p>
        Gastroenterología, Cirugía Oncológica Gastrointestinal, Cirugía General y Laparoscopía.

        </p>

        <Button title="Ver más" />
      </div>
    </div>
  );
};

export default Home;
