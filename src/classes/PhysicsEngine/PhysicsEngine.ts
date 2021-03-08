import BoxCollider from "../BoxCollider/BoxCollider";

export default class PhysicsEngine {

  private gravity: number;
  private jumpSpeed: number;
  private velocity: number;
  
  constructor (jumpSpeed: number, gravity: number){
    this.jumpSpeed = jumpSpeed;
    this.gravity = gravity;
    this.velocity = 0;
  }

  applyGravity(collider: BoxCollider){
    if (collider.getY() < window.innerHeight)
    {
      this.velocity += this.gravity;
      collider.setY(this.velocity);
    }
  }

  applyJump(collider: BoxCollider){
    if (collider.getY() > -50)
    {
      this.velocity = this.jumpSpeed;

      collider.setY(this.velocity);
    }
  }

  getVelocity(){
    return this.velocity;
  }
}