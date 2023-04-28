
const ataque = require("./attacks.json");

let a = ataque.filter(function(ataque){
    return ataque.type == "PHYSICAL";
})

console.log(a);