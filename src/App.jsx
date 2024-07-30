import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Client from "./pages/Client";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <div className=" max-container border-[#fff] ">
        <Navbar />
        <section id="Home" className="h-[100vh]  ">
          <Home />
        </section>
        <section id="Services" className="h-[100vh]   bg-gray-100">
          <Services />
        </section>
        <section id="About" className="h-[100vh]  ">
          <About />
        </section>
        <section id="Client" className="h-[100vh]   bg-gray-100">
          <Client />
        </section>
        <section id="Contact" className="h-[100vh] ">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
