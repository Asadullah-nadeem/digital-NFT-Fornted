import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ControllerMobile from "./controllers/controllers.mobile";
import { useEffect } from "react";
import { initParticles } from "./particles";

function App() {
  useEffect(() => {
    initParticles("particles-bg");
  }, []);

  return (
    <div className="font-poppins relative">
      <div
        id="particles-bg"
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      <ControllerMobile />

      <div className="container mx-auto px-4 max-w-screen-xl">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
