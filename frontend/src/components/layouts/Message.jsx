// Message.js
import { useEffect, useState } from "react";
import emitter from "../../utils/eventEmitter";

import style from "./Message.module.css";

export default function Message() {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const flashListener = ({ message }) => {
      setVisibility(true);
      setMessage(message);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    };

    emitter.addListener("flash", flashListener);

    // return () => {
    //   emitter.removeListener("flash", flashListener);
    // };
  }, []);

  return (
    visibility && (
      <div className={`${style.error} error_${message.isError}`}>
        {message.message}
      </div>
    )
  );
}
