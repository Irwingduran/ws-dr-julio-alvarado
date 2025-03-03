import React from "react";
import Navbar from "../../components/Navbar";
import Trajectory from "./Trajectory";
import Service from "./Service";
import Footer from "../../components/Footer";
import DoctorProfile from "./DoctorProfile";
import AboutSection from "./AboutSection";
import KeyDifferentiators from "./KeyDifferentiators";
import AppointmentBanner from "./AppointmentBanner";
import Reviews from "./Reviews";
import MedicalStats from "./MedicalStats";
import Associations from "./Associations";
import Partners from "./Partners";
import Contact from "../../components/Contact";
import Mockup from "./mockup";

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
        <Associations/>
        <div className="py-6" id="services">
        <Service />
        <KeyDifferentiators/>
        </div>
        <Trajectory />
    
        <div>
        <AppointmentBanner/>      
        </div>
        <div>
        <Reviews/>
        <Mockup/>
       </div>

       <div className="py-9" id="contact">
       <Contact/>
          
          <Partners/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
