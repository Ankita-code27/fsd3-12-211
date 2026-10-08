import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const folder = path.dirname(filename);

app.use(express.static(path.join(folder, "pages")));

app.use((req, res) => {
  res.status(404).send("<h1>Page not found");
});

app.listen(4444, () => console.log("prg3 is run at 4444"));
