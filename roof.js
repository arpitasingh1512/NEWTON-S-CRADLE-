class Roof{
    constructor(x,y,width,height){
        //all the properties of the objects go here
        var  options={
            'isStatic':true
          };

          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world,this.body);
    }

    //functions go here
    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}