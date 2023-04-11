import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LatestArticles from "./components/Articles";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LatestArticles></LatestArticles>
      <Footer></Footer>
    </>
  );
}

export default App;
