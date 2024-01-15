import api from "../utils/api";
import { useEffect, useState } from "react";
import style from "./Contatos.module.css";

export default function Contatos() {
  const [contacts, setContacts] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/minha-lista", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        // console.log("resp", response);
        setContacts(response.data.contatosFiltrados.Contacts);
      });
  }, [token]);

 

  return (
    <div className={style.contacts}>
      {contacts.length > 0 &&
        contacts.map((contact) => (
          <div className={style.contact} key={contact.id}>
            <h3 className={style.capitalizeName}>Nome: {contact.name}</h3>
            <p>
              <span className={style.contact_desc}>Telefone: </span> {contact.phone} /{" "}
              <span className={style.contact_desc}>Email:</span> {contact.email}
            </p>
          </div>
        ))}

      {contacts.length < 1 && <p>Não existem contatos cadastrados!</p>}
    </div>
  );
}
