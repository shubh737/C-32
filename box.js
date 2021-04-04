class Box {
    constructor(x,y,width,height) {
      var options = {
         friction:0.4,
     
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x ; 
      this.y = y ;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    score(){
if(this.visibility <0 && this.visibility > -105){
  score++
}

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("#41E0D0");
      rect(pos.x, pos.y, this.width, this.height);

      if (this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world , this.body)
        push()
        this.visibility = this.visibility -5;
  
        tint(255,this.visibility);
       
        pop();  
      }
    }
  };
