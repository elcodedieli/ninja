class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    
    showStats(){
        console.log(this.constructor.name,this.nombre,this.salud,this.velocidad,this.fuerza); 
    }    
    drinkSake(){
        
        this.salud +=10;
        console.log(this.salud);
    }    
}    
const ninja1 = new Ninja('Atenea');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();




