import "./App.css";
import Home from "./pages/Home";

//componentes
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Route, Routes } from "react-router-dom";

import Contatos from "./pages/Contatos";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { UserProvider } from "./context/useContext";
import NotFound from "./pages/404";

function App() {
  // const api = fetch("http://localhost:5000")
  //   .then((response) => response.json())
  //   .then((lista) => lista)
  //   .catch((err) => console.log(err));

  return (
    <>
      <UserProvider>
        <Header />
        <main className="principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route path={"/minha-lista"} element={<Contatos />} />

            <Route path="*" element={<NotFound />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
