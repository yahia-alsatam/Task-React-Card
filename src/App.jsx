import "./App.css";
import { Footer } from "./component/Footer";
import GetProducts from "./component/GetProducts";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      {/* Call the navbar component */}
      <NavBar />
      {/* Call the hero section component */}
      <HeroSection />
      {/* Call the product fetching component. */}
      <GetProducts />
      {/* Call the footer component */}
      <Footer />
    </>
  );
}

export default App;
