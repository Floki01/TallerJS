    class Personaje {
    constructor() {
        this.nombre = this.generarNombre();
        this.vida = this.generarVida();
        this.velocidad = this.generarVelocidad();
        this.clase = this.asignarClase()
        this.ataqueUno;
        this.ataqueDos;
    }


    estaVivo() {
        return this.vida > 0;
    }

    // metodo para elegir aleatoriamente un nombre de la array ()
    generarNombre() {
        const names = [`Claudio`, `Matias`, `Juan`, `Pedro`,`Luis`,`Pablo`];
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
        let ataqueTipo;
        if (clase == "MAGICIAN" || clase == "FAIRY") {
            ataqueTipo = ataque.filter(function (ataque) {
                return ataque.type == "MAGIC";
            })
        } else {
            ataqueTipo = ataque.filter(function (ataque) {
                return ataque.type == "PHYSICAL";
            })
        }
        const randomClase = Math.floor(Math.random() * clase.length);
        return ataqueTipo[randomClase];
    }

    generarVida() {
        return Math.floor(Math.random() * (200 - 100 + 1) + 100);
    }

    generarVelocidad() {
        return Math.floor(Math.random() * (10 - 1 + 1) + 1);
    }

    //informacionBatalla(){} optimizar los metodos atacar y contratacar
    // + o ${}
    atacar(enemigo) {

        if (this.velocidad > enemigo.velocidad) { // quien ataca primero
            if (Math.random() >= 0.5) { //usa habilidad uno
                if (this.ataqueUno.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) { //golpea
                    enemigo.vida -= this.ataqueUno.damage; //daño
                    console.log(`${this.nombre} ataca con ${this.ataqueUno.name}...Da en el blanco!. La vida del ${enemigo.nombre} queda en ${enemigo.vida}`);
                    enemigo.contratacar(this);
                } else { //falla
                    console.log(`${this.nombre} ataca con ${this.ataqueUno.name}...Falla!. La vida del ${enemigo.nombre} se mantiene en ${enemigo.vida}`);
                    enemigo.contratacar(this);
                }

            } else { //Usa habilidad dos
                if (this.ataqueDos.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) { //golpea
                    enemigo.vida -= this.ataqueDos.damage; //daño
                    console.log(`${this.nombre} ataca con ${this.ataqueDos.name}...Da en el blanco!. La vida del ${enemigo.nombre} queda en ${enemigo.vida}`);
                    enemigo.contratacar(this);
                } else { //falla
                    console.log(`${this.nombre} ataca con ${this.ataqueDos.name}...Falla!. La vida del ${enemigo.nombre} se mantiene en ${enemigo.vida}`);
                    enemigo.contratacar(this);
                }
            }

        } else {
            if (Math.random() >= 0.5) {
                if (enemigo.ataqueUno.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) {
                    this.vida -= enemigo.ataqueUno.damage;
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueUno.name +"...Da en el blanco!. La vida del " + this.nombre + " queda en " + this.vida)
                        this.contratacar(enemigo);
                } else {
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueUno.name +"...Falla!. La vida del " + this.nombre + " se mantiene en " + this.vida);
                        this.contratacar(enemigo);
                }
            } else {
                if (enemigo.ataqueDos.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) {
                    this.vida -= enemigo.ataqueUno.damage;
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueDos.name +"...Da en el blanco!. La vida del " + this.nombre + " queda en " + this.vida);
                        this.contratacar(enemigo);
                } else {
                    console.log(enemigo.nombre + " ataca con " + enemigo.ataqueDos.name +"...Falla!. La vida del " + this.nombre + " se mantiene en " + this.vida);
                        this.contratacar(enemigo);
                }
            }

        }
    }

    contratacar(enemigo) {
        if (Math.random() >= 0.5) { //usa habilidad uno
            if (this.ataqueUno.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) { //golpea
                enemigo.vida -= this.ataqueUno.damage; //daño
                console.log(`${this.nombre} ataca con ${this.ataqueUno.name}...Da en el blanco!. La vida del ${enemigo.nombre} queda en ${enemigo.vida}`);
            } else { //falla
                console.log(`${this.nombre} ataca con ${this.ataqueUno.name}...Falla!. La vida del ${enemigo.nombre} se mantiene en ${enemigo.vida}`);
            }
        }
         else  //Usa habilidad dos
        if (this.ataqueDos.accuracy < Math.floor(Math.random() * (100 - 1 + 1) + 1)) { //golpea
            enemigo.vida -= this.ataqueDos.damage; //daño
            console.log(this.nombre + " ataca con " + this.ataqueDos.name +"...Da en el blanco!. La vida del " + enemigo.nombre + " queda en " + enemigo.vida)
        } else { //falla
            console.log(this.nombre + " ataca con " + this.ataqueDos.name +"...Falla!. La vida del " + enemigo.nombre + " se mantiene en " + enemigo.vida);
        }
    }
}

   

let a = new Personaje("gg");
let b = new Personaje("Bggg");


function batalla(a,b){
    let contador =1 ;
    while(a.estaVivo() && b.estaVivo()){
        console.log(`\nTurno N°${contador}`)
        a.atacar(b);
        contador++;
    }
    
}

function comenzar(personajeUno, personajeDos){
    console.log("### INICIAR ####\n");
    console.log(`${personajeUno.nombre} | ${personajeUno.clase} | ${personajeUno.vida} de vida vs ${personajeDos.nombre} | ${personajeDos.clase} | ${personajeDos.vida} de vida`);

    console.log("\n### BATALLA ###")

    if(Math.random() >= 0.5){
        
        batalla(a,b)
    }
    else{
        batalla(b,a)
    }
    console.log("\n### RESUMEN ###")
    console.log(` gana la batalla`);
    console.log(`El fallo veces su ataque`);
    console.log(`El fallo veces su ataque`);
}

comenzar(a, b);



// console.log("  "+a.vida);
// a.vida-=a.ataqueUno.damage;
// console.log(" "+a.vida);

// for (let index = 0; index < 15; index++) {
//     a.atacar(b);
// }
