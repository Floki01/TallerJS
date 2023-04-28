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

    generarNombre() {
        
    }

    asignarClase(){
        const clase = ["MAGICIAN", "KNIGHT", "WARRIOR", "FAIRY"];

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

