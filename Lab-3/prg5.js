import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url == "/product") {
    res.end(`
            <h1>Iphone XL</h1>
            <h2>Price: 90000</h2>
            <h3>Discount: 15%</h3>
        `);
  }
});

server.listen(3000, () => console.log("Server run in 3000...."));
