import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ellipse1 from "./assets/images/ellipse1.svg";
import ellipse1_1 from "./assets/images/ellipse1.1.svg";
import ellipse4 from "./assets/images/ellipse4.svg";

function App() {
  return (
    <>
      <div className="relative ">
        <img className="absolute top-0 left-0 z-0 h-[1024px]" src={ellipse1} />
        <img
          className="absolute top-[400px] right-0 z-0  h-[500px]"
          src={ellipse1_1}
        />
        <img
          className="absolute top-[1500px] left-0 z-0  h-[770px]"
          src={ellipse4}
        />
        <div className="bg-primary text-white pt-10 *:z-50">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
