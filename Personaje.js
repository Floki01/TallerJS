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
                if (this.ataqueUno <= Math.floor(Math.random() * (100 - 1 + 1) + 1)) { //golpea
                    console.log(this.nombre + " ataca con " + this.ataqueUno.name + 
                    "...Da en el blanco!. La vida del" + enemigo.nombre + "queda en" + enemigo.vida())
                } else {
                    console.log(this.nombre + " ataca con " + this.ataqueUno.name + 
                    "...Falla!. La vida del" + enemigo.nombre + " se mantiene en" + enemigo.vida())
                }
            } else { //Usa habilidad dos

            }
        } else {
            console.log("chao");
        }
    }
}


// let p = new Personaje("nombre");
let a = new Personaje("ass");
console.log(a);
