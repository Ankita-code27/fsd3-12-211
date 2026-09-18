import { EventEmitter } from "node:events";
const login = (name) => {
  console.log(`${name} logged in`);
};
const start = () => {
  console.log("System starts");
};
const working = (name) => {
  console.log(`${name} add items to cart`);
};
const checkout = (name) => {
  console.log(`${name} logged out`);
};
const task = new EventEmitter();
task.once("greet", start); //only one time call
task.on("greet", login); //call every time
task.on("greet", working);
task.on("greet", checkout);
task.once("exit", () => {
  console.log("System Shutting down");
});

task.emit("greet", "Mayank Bansal");
task.emit("greet", "Ankita Gupta");
task.emit("greet", "Manya Goyal");
task.emit("exit", "Manager");
