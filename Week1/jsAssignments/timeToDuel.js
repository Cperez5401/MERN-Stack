class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor (name, cost, power, resilience ){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        if( target instanceof Unit ) {
            target.resilience -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card{
    constructor (name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if( target instanceof Unit ) {
            if(this.stat == "Resilience"){
                target.resilience += this.magnitude;
            }
            else if(this.stat == "Power"){
                target.resilience += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redNinja = new Unit("Red belt ninja", 3, 3, 4)
const blackNinja = new Unit("Black Belt ninja", 4, 5, 4)
console.log(redNinja)

const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "Resilience", 3);
const UnhandledRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "Resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "	increase target's power by 2", "Power", 2);
console.log(hardAlgo);

hardAlgo.play(redNinja);
console.log(redNinja);
UnhandledRejection.play(redNinja);
console.log("---------------");
console.log(redNinja);
console.log("---------------");
pairProgramming.play(redNinja);
console.log(redNinja);
console.log("---------------");
console.log(blackNinja);
redNinja.attack(blackNinja);
