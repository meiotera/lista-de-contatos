// useFlashMessage.js
import emitter from "../utils/eventEmitter";

export default function useFlashMessage() {
  function setFlashMessage(message) {
    emitter.emit("flash", {
      message: message,
      // type: type,
    });
  }

  return { setFlashMessage };
}
