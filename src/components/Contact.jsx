import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-24 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          ¡Contáctame!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.
        </p>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-500 text-lg font-semibold">✅ ¡Formulario enviado con éxito!</p>
            <p className="text-gray-600">Gracias por comunicarte.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <AiOutlineUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative">
              <AiOutlineMail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo Electrónico"
                required
                className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="relative md:col-span-2">
              <AiOutlinePhone className="absolute top-3 left-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                rows="5"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 bg-backgroundColor text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <FaPaperPlane /> Enviar Mensaje
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
