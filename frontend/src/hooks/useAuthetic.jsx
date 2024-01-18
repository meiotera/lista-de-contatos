import api from "../utils/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";

export default function useAuthentic(user) {
  const [authenticated, setAuthenticated] = useState(false);
  const { setFlashMessage } = useFlashMessage();

  const navegate = useNavigate();

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));

    navegate("/minha-lista");
  }

  async function login(user) {
    let message = {
      isError: false,
      message: "Login realizado com sucesso!",
    };

    try {
      const data = await api.post("/login", user).then((response) => {
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      message = {
        isError: error.response.data.isError,
        message: error.response.data.message,
      };

      error.response.data;
    }

    setFlashMessage(message);
  }

  async function register(user) {
    let message = {
      isError: false,
      message: "Registro realizado com sucesso!",
    };

    try {
      const data = await api.post("/registro", user).then((response) => {
        return response.data;
      });

      navegate("/login");
    } catch (error) {
      console.error(error.response.statusText);
      setFlashMessage(error.response.data);
      return;
    }
    setFlashMessage(message);
  }

  return { authenticated, login, register };
}
