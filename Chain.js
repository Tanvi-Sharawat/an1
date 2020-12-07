class Chain {

    constructor(bodyA,pointB){
    
 var options={
    bodyA:bodyA,
    //pointB:pointB,
    bodyB:bodyB,
    stiffness:0.01,
    length:10
}

this.chain=Constraint.create(options)
World.add(world,this.chain);
    }


display(){

    strokeWeight(4);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
   
}




}