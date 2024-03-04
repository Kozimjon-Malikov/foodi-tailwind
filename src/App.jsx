import "./App.css";
import Carusel from "./components/Carusel";
import Catagories from "./components/Catagories";
import Copyright from "./components/Copyright";
import Fotoer from "./components/Fotoer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div className="md:container  mx-auto">
      <Header/>
      <Intro/>
      <Catagories/>
      <Carusel/>
      <Testimonial/>
      <Services/>
      <Fotoer/>
      <Copyright/>
    </div>
  );
}

export default App;
