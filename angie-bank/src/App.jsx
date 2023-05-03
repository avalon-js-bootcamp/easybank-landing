import { Header } from "./components/header";

import Footer from "./components/footer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/news";
import Guidge from "./components/usageguide";
import HeadLine from "./components/headline";

<link
  href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap"
  rel="stylesheet"
></link>;

function App() {
  return (
    <div className="App">
      <Header />
      <HeadLine />
      <Guidge />
      <News />
      <Footer />
    </div>
  );
}

export default App;
