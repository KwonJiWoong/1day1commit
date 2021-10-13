const { default: fetch } = require("node-fetch");

fetch("https://api.randomuser.me/?nat=US&results=1").then(res =>
    console.log(res.json())
);