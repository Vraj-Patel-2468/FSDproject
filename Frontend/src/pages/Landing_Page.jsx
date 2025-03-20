import HeroSection from "../components/Herosection.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Info from "../components/info.jsx"
export default function Landing_page() {
  return (
    <>
      <Navbar />
      <HeroSection />  
      <Info/>
      <Footer/>     
    </>
  );
}