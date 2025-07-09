// src/App.jsx
import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ scrollBehavior: "smooth" }}>
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Hero />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <footer className="text-center py-4 bg-dark text-white">
        made with ☕ + 💻 by Shloka
      </footer>
    </>
  );
}

export default App;
