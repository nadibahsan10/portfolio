import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollProgressBar from "./Components/Scroll";
const App = () => {
  return (
    <main>
      <ScrollProgressBar />
      <Header />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
