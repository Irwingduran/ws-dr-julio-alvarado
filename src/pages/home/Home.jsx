import React from "react";
import Navbar from "../../components/Navbar";
import Trajectory from "./Trajectory";
import Service from "./Service";
import Blog from "./Blog";
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
        <Trajectory />
        <div className="py-6" id="services">
        <Service />
        </div>
        <div>
        <KeyDifferentiators/>
        <AppointmentBanner/>
        
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
          <Partners/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
