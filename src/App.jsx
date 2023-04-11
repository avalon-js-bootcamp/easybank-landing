import { useState } from "react";
import Navbar from "./components/Navbar";
import Benefits from "./components/Benefits";
import LatestArticles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Benefits></Benefits>
      <LatestArticles></LatestArticles>
      <Footer></Footer>
    </>
  );
}

export default App;
