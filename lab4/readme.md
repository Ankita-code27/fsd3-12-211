# NPM Project

1. goto project folder (by cd)
2. type `npm init-y`
3. open package.json
4. update `type:module`
5. install nodemon ```npm i nodemon -D`
6. update script in package.json

```
script{
    "start": "node app.js",
    "dev":"nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use `npm run dev`

# REST API

### Representational State Transfer (REST)

- any backend server return only data not html file
- REST API uses( get, post , patch , delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API Tester like postman , thunder client , echo API etc

Request Type
1.GET->get all,get by id
GET : /api/products ->Get all products.
GET : /api/products/101 ->To get a particular product.

2.POST->Adding the products.
POST:/api/products
data will be shared in echoapi body.

3.PUT/PATCH:/api/products/201

4.DELETE:/api/products/110

Exported function can be executed by
