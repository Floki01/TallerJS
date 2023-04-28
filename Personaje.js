class Personaje{
    constructor(){
        this.nombre = "demo"
        // this.vida = this.generarVida();
        // this.velocidad = this.generarVelocidad();
        this.ataqueUno;
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
        console.log(enemigo)
        // if(this.velocidad > enemigo.velocidad){
        //     if(){

        //     }
        //     else{

        //     }
        // }
    }
}

const p = new Personaje();

console.log(p);
