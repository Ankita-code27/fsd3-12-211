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
  setTimeout(f1, 0);
  new Promise(resolve,reject)=>{
    resolve("I am promise 1")
  };.then((resolve)=>console.log)
  
main();
