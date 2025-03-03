import React from "react";
import { Link } from "react-scroll";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <nav>
        <Navbar />
      </nav>
      {/* Hero Section */}
      <section className="relative bg-white text-black py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Cáncer de Estómago</h2>
          <p className="text-lg md:text-lg mb-6">
            El cáncer de estómago consiste en un crecimiento de células que comienza en el estómago. El estómago está en la parte media superior del abdomen, justo por debajo de las costillas. El estómago ayuda a descomponer y digerir los alimentos. El cáncer de estómago puede desarrollarse en cualquier parte del estómago. En casi todo el mundo, los tipos de cáncer de estómago se manifiestan en la parte principal del estómago (cuerpo del estómago).
          </p>
          <div className="flex justify-center gap-4">
            <a href="/#services" className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Ver Servicios
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5212224809611&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition"
              target="_blank"
            >
              <FaPhoneAlt />Agendar cita
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre el Servicio</h2>
            <p className="text-gray-600 mb-4">
              El tratamiento contra el cáncer de estómago tiene mayor probabilidad de ser exitoso si el cáncer solo está en el estómago. El pronóstico para las personas que tienen pequeños tipos de cáncer de estómago es bastante bueno. Se prevé que muchas personas se curen. La mayoría de los tipos de cáncer de estómago se encuentran cuando la enfermedad está avanzada y cuando curarse es menos probable.
            </p>
          </div>
          <div>
            <img
              src="img/details.jpg"
              alt="Doctor"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Más detalles sobre el servicio</h2>
          <p className="text-gray-600">Tratamientos avanzados para diferentes patologías.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Síntomas", desc: "Dificultad para tragar, dolor abdominal, sensación de hinchazón abdominal, acidez estomacal, indigestión, náuseas, vómitos, pérdida involuntaria de peso, sentirse muy cansado, heces de color negro." },
            { title: "Causas", desc: "No se sabe exactamente cuáles son las causas del cáncer de estómago. Los expertos creen que la mayoría de los tipos de cáncer de estómago empiezan cuando algo daña el revestimiento interno de este órgano." },
            { title: "Diagnóstico", desc: "Para el diagnóstico se puede utilizar: Observar el estómago por dentro con una endoscopia, ecografía de estómago, análisis de sangre, pruebas por imágenes, cirugía." },
            { title: "Etapa del Cáncer", desc: "Para determinar la etapa del cáncer se realizan análisis de sangre, pruebas por imágenes y cirugía." },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;