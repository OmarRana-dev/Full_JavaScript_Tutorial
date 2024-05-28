class Animal {
  constructor(name) {
    this.name = name;
  }
  makesound() {
    console.log(this.name + " can make sound");
  }
}

class Penguin extends Animal {}

class Bird extends Animal {}

const flyer = {
  fly() {
    console.log(`${this.name}, I'm flying!`);
  },
};

Object.assign(Bird.prototype, flyer);

const bird = new Bird("Bird");
bird.fly(); // Outputs 'Flap flap, I'm flying!'
bird.makesound();

const penguin = new Penguin("Penguin");
penguin.makesound();
// penguin.fly(); // 'Error: penguin.fly is not a function'
