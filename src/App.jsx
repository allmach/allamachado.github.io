import React from "react";
import "./App.css";
import "./translations/i18n";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio"
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import SocialSidebar from "./components/socialSidebar/SocialSidebar";
import Contact from "./components/contact/Contact";

// Componente interno que usa o contexto
const AppContent = () => {
  return (
    <>
      <Header />
      <SocialSidebar />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
  );
};

export default App;
