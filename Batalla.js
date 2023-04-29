

 
class Batalla{
    constructor(){
        
    }
    
    comenzar(personajeUno, personajeDos){
        console.log(personajeUno);
        console.log(personajeDos);
        if(Math.random() >= 0.5){
            this.batalla(personajeUno, personajeDos)
        }
        else{
            this.batalla(personajeDos, personajeUno)
        }
    }

    batalla(a,b){
        while(a.estaVivo() && personajeDos.estaVivo()){
            
        }

    }
}
