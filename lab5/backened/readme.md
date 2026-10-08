#Express
Fast, unopinionated, minimalist web framework for Node.js

## Steps

1. Create Project folder.
2. Create two folders ( frontened , backend)in root Lab5
3. open terminal and reach to backend by

```
cd ..
cd lab5
cd backend
```

4. type ` npm init -y`.
5. install nodemon ` npm i nodemon -D`
6. install express ` npm i express`
7. update backend/packages.json

- change type ` type:module`
- change script

```
"scripts": {
   "start": "node app.js",
   "dev": "nodemon prg1.js"
 }
```

8. add `lab5/backend/node_modules` to .gitignore
9. create `prg1.js` in backend.
10. write the script below to start express server

```
import express from "express";

const app = express();

app.get("/", (req, res) => {
 res.send("Hello Express");
});


// this line must be at the end of the file
app.listen(4444, () => {
 console.log("Prg1  is running at 4444");
});


```

# Static pages

we can add any static pages pages with the help of express.static.
Express support middleware.
When we have to execute some funx before server execution app.use is always applied to middleware.
