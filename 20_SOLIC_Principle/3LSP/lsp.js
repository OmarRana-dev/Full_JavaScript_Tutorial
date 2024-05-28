// Liskov Substitution Principal

class BaseBird {
  makesound() {}
}

class Bird extends BaseBird {
  fly() {
    console.log(`Bird can fly!`);
  }

  makesound() {}
}

class Sparrow extends Bird {
  fly() {
    console.log(`Sparrow can fly`);
  }
  makesound() {
    console.log(`Sparrow can make sound`);
  }
}

class Penguin extends BaseBird {
  fly() {
    throw new Error(`Penguin cannot fly`);
  }
  makesound() {
    console.log(`Penguin can make sound`);
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

makeBirdFly(new Bird());
makeBirdFly(new Sparrow());
makeBirdFly(new Penguin());
