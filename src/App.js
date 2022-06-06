import React from "react";
import About from "./component/About";
import ContactMe from "./component/ContactMe";
import Footer from "./component/Footer";
import NavMenu from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import StartBootstrap from "./component/StartBootstrap";

function App() {
  return (
    <div>
      <NavMenu />
      <StartBootstrap />
      <Portfolio />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
