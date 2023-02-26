import "./styles.css";
// import "./componets/FontAwesome";
import Header from "./Header";
import Showcase from "./Showcase";
import Projects from "./Projects";
import Footer from "./Footer";
import React from "react";
import AboutMe from "./AboutMe";
import { Routes, Route, Link } from "react-router-dom";
// project was made using React version : @16.8.6

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/contact" element={<AboutMe />} />
      </Routes>

      <Projects />

      <Footer />
    </div>
  );
}
