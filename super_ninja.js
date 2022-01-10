// parent Ninja class
class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3){
        this.name = name;   
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName = () => console.log(this.name);
    showStats = () => console.log("name: " + this.name, " strength: " + this.strength, " speed: " + this.speed, " health: " + this.health);
    drinkSake = () => this.health += 10;
}

// child Sensei class

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10)
        this.wisdom = 10 
    }

    speakWisdom (){
        superSensei.drinkSake();
        console.log("Do or do not, there is not try");
    }

} 

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"