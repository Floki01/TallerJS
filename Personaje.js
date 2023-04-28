class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
        this.vida = this.generarVida();
        this.velocidad = this.generarVelocidad();
        this.clase = this.asignarClase()
        this.ataqueUno;
        this.ataqueDos;
    }

    asignarAtaque(tipo) {
        const ataque = require("./attacks.json");
        ataque.filter

    }

    estaVivo() {
        return this
    }

    // metodo para elegir aleatoriamente un nombre de la array 
    generarNombre() {
        const names = [`Claudio`, `Matias`, `Juan`, `Pedro`];
        const randomName = Math.floor(Math.random() * names.length);
        return names[randomName];
    }

    // metodo para elegir aleatoriamente un clase del array 
    asignarClase() {
        const clases = ["MAGICIAN", "KNIGHT", "WARRIOR", "FAIRY"];
        let id = Math.floor(Math.random() * clases.length);
        let clase = clases[id];
        this.ataqueUno = this.generarAtaque(clase);
        this.ataqueDos = this.generarAtaque(clase);
        return clase;
    }


    generarAtaque(clase) {
        const ataque = require("./attacks.json");
        let a;
        if(clase == "MAGICIAN" || clase == "FAIRY"){
            a = ataque.filter(function(ataque){
                return ataque.type == "MAGIC";
            })
        }
        else{
            a = ataque.filter(function(ataque){
                return ataque.type == "PHYSICAL";
            })
        }
        const randomClase = Math.floor(Math.random() * clase.length);
        return a[randomClase];
    }

    generarVida() {
        return Math.floor(Math.random() * (200 - 100 + 1) + 100);
    }

    generarVelocidad() {
        return Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }

    atacar(enemigo) {

        if (this.velocidad > enemigo.velocidad) { // quien ataca primero
            if (Math.random() >= 0.5) { //usa habilidad uno
                if (this.ataqueUno.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) { //golpea
                    enemigo.vida-= this.ataqueUno.damage; //daño
                    console.log(this.nombre + " ataca con " + this.ataqueUno.name + 
                    "...Da en el blanco!. La vida del " + enemigo.nombre + " queda en " + enemigo.vida)
                } else { //falla
                    console.log(this.nombre + " ataca con " + this.ataqueUno.name + 
                    "...Falla!. La vida del " + enemigo.nombre + " se mantiene en " + enemigo.vida);
                }

            } else { //Usa habilidad dos
                if (this.ataqueDos.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) { //golpea
                    enemigo.vida-= this.ataqueDos.damage; //daño
                    console.log(this.nombre + " ataca con " + this.ataqueDos.name + 
                    "...Da en el blanco!. La vida del " + enemigo.nombre + " queda en " + enemigo.vida)
                } else { //falla
                    console.log(this.nombre + " ataca con " + this.ataqueDos.name + 
                    "...Falla!. La vida del " + enemigo.nombre + " se mantiene en " + enemigo.vida);
                }
            }

        } else {
            if (Math.random() >= 0.5) {
                if (enemigo.ataqueUno.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)){
                    this.vida-= enemigo.ataqueUno.damage;
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueUno.name + 
                    "...Da en el blanco!. La vida del " + this.nombre + " queda en " + this.vida)
                }

                else {
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueUno.name + 
                    "...Falla!. La vida del " + this.nombre + " se mantiene en " + this.vida);
                }
            }
            else{
                if (enemigo.ataqueDos.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)){
                    this.vida-= enemigo.ataqueDos.damage;
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueDos.name + 
                    "...Da en el blanco!. La vida del " + this.nombre + " queda en " + this.vida)
                }

                else {
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueDos.name + 
                    "...Falla!. La vida del " + this.nombre + " se mantiene en " + this.vida);
                }
            }
            
        }
    }
}

let b = new Personaje("b");
let a = new Personaje("a");

console.log("a"+ a.velocidad)
console.log("b"+ b.velocidad);

for (let index = 0; index < 8; index++) {
    a.atacar(b);
}

console.log("a"+ a.vida)
console.log("b"+ b.vida);
