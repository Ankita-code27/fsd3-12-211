import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "product.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "product.html"));
});

//this route must be last 👇🏻
app.use((req, res) => {
  res.status(404).send("<h1>Page not found");
});

app.listen(4444, () => console.log("prg2 is run at 4444"));
