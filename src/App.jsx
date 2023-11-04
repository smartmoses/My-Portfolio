import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import MyProjects from "./components/MyProjects.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <MyProjects />
      <Footer />
    </>
  );
};

export default App;
