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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Apendicitis</h2>
          <p className="text-lg md:text-lg mb-6">
            La apendicitis es una inflamación del apéndice. El apéndice es una bolsa en forma de dedo que sobresale del colon en la parte inferior derecha del vientre, también llamada abdomen. La apendicitis causa dolor en la parte inferior derecha del abdomen. Sin embargo, en la mayoría de las personas, el dolor comienza alrededor del ombligo y luego se desplaza. A medida que empeora la inflamación, suele aumentar el dolor de la apendicitis, y con el tiempo se agrava.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/#services" className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Ver Servicios
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5212224809611&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
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
              El tratamiento de la apendicitis suele consistir en una intervención quirúrgica para extirpar el apéndice. Antes de la cirugía, es posible que te administren antibióticos para tratar la infección.
            </p>
          </div>
          <div>
            <img
              src="img/details1.avif"
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
            { title: "Síntomas", desc: "Dolor repentino que comienza en el lado derecho en la parte inferior del abdomen, náuseas y vómitos, pérdida del apetito, fiebre, estreñimiento o diarrea, distensión del estómago, gases." },
            { title: "Causas", desc: "Una obstrucción en el revestimiento del apéndice, llamado lumen, es la causa probable de la apendicitis. Esta obstrucción puede causar una infección." },
            { title: "Diagnóstico", desc: "Examen físico, análisis de sangre, análisis de orina, estudios por imágenes." },
            { title: "Tratamiento", desc: "Suele realizarse una intervención quirúrgica abierta o por laparoscopía." },
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
