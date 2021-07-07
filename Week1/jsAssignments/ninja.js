class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  showStats() {
    console.log(
      `\n ${this.name}\n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`);
  }

  drinkSake() {
    this.health += 10;
  }


}

const ninja1 = new Ninja("Chris", 100);
// console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
console.log('------')
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
  constructor(name, wisdom = 10){
    super(name, 200, 10, 10);
    this.wisdom = wisdom;
  }

  speakWisdom(){
    super.drinkSake();
    this.health += 100;
    console.log('What one programmer can do in one month, two programmers can do in two months.')
  }

  drinkSake(){
    this.health += 150;
    console.log('My Sake')
  }
}


const superSensei = new Sensei('Master Splinter');
console.log(superSensei);
superSensei.speakWisdom;
console.log(superSensei);