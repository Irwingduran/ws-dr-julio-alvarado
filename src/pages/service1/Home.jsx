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
            <Navbar/>
        </nav>
      {/* Hero Section */}
      <section className="relative bg-white text-black py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Cáncer de Colón</h2>
          <p className="text-lg md:text-lg mb-6">
          El cáncer de colon es una enfermedad que afecta al intestino grueso y suele comenzar como pólipos que pueden volverse malignos. Sus síntomas incluyen cambios en los hábitos intestinales, sangre en las heces y dolor abdominal. Factores de riesgo como dieta, antecedentes familiares y tabaquismo aumentan su probabilidad. La detección temprana es clave, y el tratamiento puede incluir cirugía, quimioterapia y radioterapia.
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
            Ofrecemos un servicio integral que incluye la detección temprana mediante colonoscopias y pruebas avanzadas, un diagnóstico personalizado utilizando tecnología de última generación, y tratamientos especializados que abarcan cirugía, quimioterapia, radioterapia y terapias innovadoras. 
                        </p>
            <p className="text-gray-600">
Además, brindamos atención continua con un enfoque humano y profesional, garantizando seguimiento médico durante todo el proceso y priorizando la calidad de vida en cada etapa.
            </p>
          </div>
          <div>
            <img
              src="img/details2.webp"
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
            { title: "Detección temprana", desc: "Realizamos colonoscopias y pruebas avanzadas para identificar pólipos o signos tempranos de cáncer." },
            { title: "Diagnóstico personalizado", desc: "Contamos con tecnología de última generación para un diagnóstico preciso y detallado."},
            { title: "Tratamientos especializados", desc: "Diseñamos planes de tratamiento individualizados que pueden incluir cirugía, quimioterapia, radioterapia y terapias avanzadas." },
            { title: "Atención continua", desc: " Proveemos seguimiento médico constante para garantizar tu bienestar durante y después del tratamiento." },

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
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
