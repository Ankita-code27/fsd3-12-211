import { EventEmitter } from "events";

class DomClass extends EventEmitter {
  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  removeEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  //dispatch->click
  dispatchEvent(eventName, eventData = {}) {
    const event = {
      type: eventName,
      timespam: new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}
const button = new DomClass();
const handleClick = (event) => {
  console.log(`Botton clicked type: ${event.type} at ${event.timespam}`);
};
button.addEventListener("click", handleClick);
button.dispatchEvent("click", {
  target: "submitBtn",
});
button.removeEventListener("click", handleClick);
button.dispatchEvent("click", {
  target: "resetBtn",
});
