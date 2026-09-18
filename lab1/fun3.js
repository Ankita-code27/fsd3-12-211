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
  console.log("main😊");
  setTimeout(f1, 1000);
  setTimeout(f2, 700);
  process.nextTick(f3);
  console.log("end");
}
main();
//A function not executed immediately but it must be executed after a while.
//It has some status  during the execution.
//At final it may resolve()->Sucess OR reject->Uncess.
