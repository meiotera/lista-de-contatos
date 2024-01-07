import "./App.css";
import Home from "./pages/Home";

//componentes
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
