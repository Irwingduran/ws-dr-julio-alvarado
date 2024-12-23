import React from "react";
import Navbar from "./components/Navbar";
import Trajectory from "./components/Trajectory";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import DoctorProfile from "./components/DoctorProfile";
import AboutSection from "./components/AboutSection";
import KeyDifferentiators from "./components/KeyDifferentiators";
import AppointmentBanner from "./components/AppointmentBanner";
import Reviews from "./components/Reviews";
import MedicalStats from "./components/MedicalStats";
import Associations from "./components/Associations";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div className="py-5" id="home">
          <DoctorProfile />
        </div>
        <MedicalStats />
        <div className="py-12" id="about">
          <AboutSection/>
          
        </div>
        <div className="py-6" id="services">
        <Service />
        </div>
        <div>
        <KeyDifferentiators/>
        <AppointmentBanner/>
        <Trajectory />
        </div>
        <div>
          <Blog />
        </div>
        <div>
        <Reviews/>
       </div>
       <div className="py-9" id="contact">
       <Contact/>
          <Associations/>
        </div>
       {/*  */}

      </main>

      <Footer />
    </div>
  );
};

export default App;
