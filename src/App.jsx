import "./App.css";
import { Footer } from "./component/Footer";
import GetProducts from "./component/GetProducts";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <GetProducts />
      <Footer />
    </>
  );
}

export default App;
