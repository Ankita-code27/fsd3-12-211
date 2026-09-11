//We use inmemory database

let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "3487xxxxxx",
    email: "ankitacse@gmail.com",
  },
  {
    id: 2,
    name: "Monika Verma",
    mob: "8787xxxxxx",
    email: "moni.example@gmail.com",
  },
];
let nextId = 3;

export const getUsers = () => users;
