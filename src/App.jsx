import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="bg-primary text-white px-[10%] pt-10 ">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;