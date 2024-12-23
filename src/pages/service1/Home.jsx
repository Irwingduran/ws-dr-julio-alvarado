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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Servicio</h1>
          <p className="text-lg md:text-xl mb-8">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusantium velit. Veritatis tempora doloremque eum suscipit voluptatem. Illum cumque nam nihil repellat? Voluptates, provident accusantium perferendis incidunt aut labore ullam?          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Ver Servicios
            </Link>
            <a
              href="tel:+123456789"
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition"
            >
              <FaPhoneAlt /> Llamar Ahora
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor soluta officiis, possimus provident sequi amet exercitationem ex quaerat quae, corrupti ab doloremque accusamus voluptatum incidunt excepturi odio? Tempora, ad.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere aut cumque optio aliquid minima adipisci, molestias temporibus? Minus voluptas facere nihil quibusdam laboriosam velit, dolores adipisci a? Vitae, dicta.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500"
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
            { title: "Apendicitis", desc: "Diagnóstico y tratamiento de apendicitis aguda." },
            { title: "Cáncer del Colon", desc: "Detección y tratamiento integral del cáncer de colon." },
            { title: "Cáncer del Estómago", desc: "Tratamiento especializado para el cáncer gástrico." },
            { title: "Cirugía Laparoscópica", desc: "Procedimientos mínimamente invasivos." },
            { title: "Atención Integral", desc: "Enfoque holístico en el cuidado del paciente." },
            { title: "Consulta Especializada", desc: "Diagnósticos precisos y personalizados." },
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Testimonios</h2>
          <p className="text-gray-600">Lo que dicen nuestros pacientes.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {[
            { name: "Ana López", feedback: "¡Excelente trato y profesionalismo! 100% recomendado." },
            { name: "Carlos Martínez", feedback: "Gracias al doctor pude recuperarme rápidamente." },
            { name: "Sofía Ramírez", feedback: "Un servicio excepcional, atención personalizada." },
          ].map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h4 className="text-gray-800 font-semibold mt-4">— {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
