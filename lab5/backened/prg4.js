import express from "express";
import { products } from "./data.js";

const app = express();

//returns name,image,price of all products
app.get("/api/products", (req, res) => {
  let sortedProducts = products.map(({ name, image, price, id }) => ({
    name,
    image,
    price,
    id,
  }));
  res.status(200).json({ count: sortedProducts.length, data: sortedProducts });
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found");
});

app.listen(4444, () => console.log("prg4 is run at 4444"));
