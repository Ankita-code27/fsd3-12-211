const f1 = () => {
  console.log("F1");
};
const f2 = () => {
  console.log("F2");
};
const f3 = () => {
  console.log("F3");
};

function main() {
  console.log("main");
  setTimeout(f1, 1000);
  setImmediate(f2);
  f3();
  console.log("end");
}
main();
