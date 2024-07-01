import { Routes, Route } from "react-router-dom";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import Login from "./components/Login";
import SubHeader from "./components/SubHeader";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/History" element={<History />} />
          <Route exact path="/Login" element={<Login />} />
          {/* <Benefits /> */}
          {/* <Services /> */}
          {/* <Pricing /> */}
          {/* <Roadmap /> */}
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
