import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-dark-blue">
        <Navbar />
        <Hero />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
