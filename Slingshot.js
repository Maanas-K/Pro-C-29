class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

  
    display(){
         image (this.sling1,230,20)
         image (this.sling2,200,20)
        // image (this.sling2,200,20)
       

        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            if(pointA.x>250){
                push ();
                stroke(48,22,8)
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+50, pointB.y);
                pop ();
            }else{
                push ();
                stroke(48,22,8)
                strokeWeight(8);
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+50, pointB.y);
                pop();
            }
        }
       
        image (this.sling1,230,20)
        image (this.sling2,200,20)
    }  
    fly(){
        this.sling.bodyA = null;
    }

    
}