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
  f1();
  f2();
  f3();
  console.log("end");
}
main();
