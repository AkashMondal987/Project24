class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:2.5,
          density:0.2
      }
      this.body = Matter.Bodies.circle(100, 230, 70, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(50,50, 20, 20);
      pop();
    }
  };