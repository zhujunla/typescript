class Animal {
  name:string;
  constructor(theNmae:string){
    this.name = theNmae;
  }
  move(distanceInMeters:number = 10){
    console.log(`${this.name}Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal{
  // name:string;
  constructor(name: string) { super(name); }
  move(distance = 45){
    super.move(distance)
  }
}
let dog = new Dog("旺财");

console.info(dog)
// dog.bark();
dog.move()