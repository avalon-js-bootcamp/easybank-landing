import { useState } from "react";
import Navbar from "./components/navbar";
import Benefits from "./components/benefits";
import LatestArticles from "./components/articles";
import Footer from "./components/footer";

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
