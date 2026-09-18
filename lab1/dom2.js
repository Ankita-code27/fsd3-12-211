import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("Click", () => {
  console.log("Task 1");
});
button.on("Click", () => {
  console.log("Task 2");
});

button.emit("Click");
