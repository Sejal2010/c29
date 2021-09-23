class Link{
    constructor(bodyA,bodyB){
this.link=Constraint.create({
    bodyA:bodyA.body.bodies[bodyA.body.bodies.length-2],
    bodyB:bodyB,
    length:0,
    stiffness:0.01
})
World.add(world,this.link)
    }
}