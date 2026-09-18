import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("Submit", (uname, password) => {
  console.log("form submited");
  console.log(`user name: ${uname}`);
  console.log(`user password: ${password}`);
});

form.emit("Submit", "abc@abc.com", "11223322");
