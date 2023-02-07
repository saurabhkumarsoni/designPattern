

function CarPrototype(proto){
    this.proto = proto
    this.clone = function(){
        const car = new Car();
        car.wheels = proto.wheels;
        car.engines = proto.engines;
        return car;
    }
  }
  
  function Car(wheels, engines){
    this.engines =engines;
    this.wheels = wheels;
    this.start = function(){
        console.log('car started');
    }
    this.stop = function(){
        console.log('car stopped')
    }
  }
  
  
  function run(){
    const proto = new Car(4,2);   // first car
    const prototype = new CarPrototype(proto);
    const car1 = prototype.clone(); // copied car
    car1.start();
  
    const car2 = prototype.clone(); // copied car
    car2.stop();
  }
  
  run();