class MENU{
    constructor(){
        this.title=createElement('h2');
        this.b1=createButton("Start");
        
    }

    display(){
        this.title.html('Self-Designed Game')
        this.title.position(400,100);
        this.b1.position(500,300);
        
    }
}