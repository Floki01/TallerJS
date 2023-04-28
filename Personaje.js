class Personaje{
    constructor(){
        this.nombre = this.generarNombre();
        this.vida = this.generarVida();
        this.velocidad = this.generarVelocidad();
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
        console.log(enemigo)
        // if(this.velocidad > enemigo.velocidad){
        //     if(){

        //     }
        //     else{

        //     }
        // }
    }
}

const personaje1 = new Personaje();
console.log(personaje1.nombre);
