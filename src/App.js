import React from "react";
import { NavBar, TypeWriter, Work, About, Contact, Footer } from "./components";

const App = () => {
  return (
    <>
      <NavBar navItems={["home", "work", "about", "contact"]} />
      <div className="container" id="home">
        <div className="intro">
          <h2>
            Hello, I'm <span>Tim Johnson</span>. <br />
            I'm a web developer & professional engineer.
            <TypeWriter />
          </h2>
        </div>
        <div className="main-grid">
          <h4 className="title" id="work">
            Work
          </h4>
          <div className="title-underline" />
          <Work />
          <h4 className="title" id="about">
            About
          </h4>
          <div className="title-underline" />
          <About />
          <h4 className="title" id="contact">
            Contact
          </h4>
          <div className="title-underline" />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
