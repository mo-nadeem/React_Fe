import About from "./components/Home/About";
import DoctorExpert from "./components/Home/DoctorExpert";
import DoctorSection from "./components/Home/DoctorSection";
import ExplorHealth from "./components/Home/ExplorHealth";
import FAQ from "./components/Home/FAQ";
import HealthPackage from "./components/Home/HealthPackage";
import HealthQuerys from "./components/Home/HealthQuerys";
import HospitalSection from "./components/Home/HospitalSection";
import InternationalPlatform from "./components/Home/InternationalPlatform";
import Section1 from "./components/Home/Section1";
import Section2 from "./components/Home/Section2";
import Section3 from "./components/Home/Section3";
import Testimonials from "./components/Home/Testimonials";
import WorldMap from "./components/Home/WorldMap";
import Header from "./components/Inc/Header";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <HospitalSection />
      <DoctorExpert />
      <ExplorHealth />
      <InternationalPlatform />
      <DoctorSection />
      <HealthPackage />
      <HealthQuerys />
      <Testimonials />
      <About />
      <WorldMap />
      <FAQ />
    </>
  );
}

export default App;
