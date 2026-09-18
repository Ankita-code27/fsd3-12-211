//Document Object Model
import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", () => {
  console.log("Botton Clicked");
});
button.emit("Click");
