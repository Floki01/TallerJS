class Personaje{
    constructor(nombre){
        this.nombre = nombre;
        this.vida = this.generarVida();
        this.velocidad = this.generarVelocidad();
        this.ataqueUno = 100;
        this.ataqueDos;
    }

    asignarAtaque(tipo){
        const ataque = require("./attacks.json");
        ataque.filter
        
    }

    estaVivo(){
        return this
    }

    // metodo para elegir aleatoriamente un nombre de la array 
    generarNombre() {
        const names = [`Claudio`,`Matias`,`Juan`,`Pedro`];
        const randomName = Math.floor(Math.random() * names.length);
        return names[randomName];
    }

    // metodo para elegir aleatoriamente un clase del array 
    asignarClase(){
        const clase = ["MAGICIAN", "KNIGHT", "WARRIOR", "FAIRY"];
        const randomClase = Math.floor(Math.random() * clase.length);
        return clase[randomClase];
    }


    generarAtaque(clase){
        
    }

    generarVida(){
        return  Math.floor(Math.random()*(200-100+1)+100);
    }

    generarVelocidad(){
        return  Math.floor(Math.random()*(10-1+1)+1);
    }

    atacar( enemigo){
        if(this.velocidad > enemigo.velocidad){ // quien ataca primero
            if(Math.random() >= 0.5){  //usa habilidad uno
                if(this.ataqueUno){
                    
                }
            }
            else{ //Usa habilidad dos

            }
        }
    }
}

let p = new Personaje("nombre");
let a = new Personaje("ass");

