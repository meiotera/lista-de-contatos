import "./App.css";
import Home from "./pages/Home";

//componentes
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { UserProvider } from "./context/useContext";
import NotFound from "./pages/404";
import PrivateRoute from "./components/PrivateRoute";
import Contatos from "./pages/Contatos";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route
              path="/minha-lista"
              element={<PrivateRoute element={<Contatos />} />}
            />

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
