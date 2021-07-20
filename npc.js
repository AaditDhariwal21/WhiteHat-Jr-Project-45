class NPC{
    constructor(x,y){
    this.body=rect(x,y,50,50);
    this.width=50;
    this.height=50;

    }

    display(){
        push();
        translate();
        rotate();
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}