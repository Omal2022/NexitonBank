import React from "react";
import Header from "./components/Header.jsx";
import LandingPage from "./components/LandingPageBody.jsx";
import StartTransaction from "./components/startTransaction/StartTransaction.jsx";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <LandingPage />

        {/* <StartTransaction /> */}
      </div>
    </>
  );
};

export default App;
