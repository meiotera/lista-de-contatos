import api from "../utils/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuthentic(user) {
  const [authenticated, setAuthenticated] = useState(false);

  const navegate = useNavigate();

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));

    navegate("/minha-lista");
  }

  async function login(user) {
    try {
      const data = await api.post("/login", user).then((response) => {
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  return { authenticated, login };
}
