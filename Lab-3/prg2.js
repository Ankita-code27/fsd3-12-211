import http from "http";
const server = http.createServer((req, res) => {
  console.log("server hit by client");
  //res.write("<h1>Hello Client</h1>");
  res.end("Hello client");
});

server.listen(4444, () => console.log("server is running ..."));
