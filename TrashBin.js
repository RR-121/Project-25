class TrashBin {
    constructor(x, y) {
        var options = {isStatic : true};
        this.x = x;
        this.y = y;

        this.TrashBinWidth = 200;
        this.TrashBinHeight = 80;


        this.bottomBody = Bodies.rectangle(x, y, this.TrashBinWidth, this.width, options);
        this.rightBody = Bodies.rectangle(this.x + this.TrashBinWidth/2, this.y - this.TrashBinHeight/2, this.width/10, this.height, options);
        this.leftBody = Bodies.rectangle(this.x - this.TrashBinWidth/2, this.y - this.TrashBinHeight/2, this.width/10, this.height, options);

        this.image = loadImage("dustbingreen.png");
                
        World.add(world, this.bottomBody);
        World.add(world, this.rightBody);
        World.add(world, this.leftBody);
    }
    display() {
        var dpos = this.bottomBody.position;
        var rpos = this.rightBody.position;
        var lpos = this.leftBody.position;

        push();
        translate(rpos.x, rpos.y);
        rectMode(CENTER);
        //noStroke();
        fill("chocolate");
        rect(0, 0, this.TrashBinWidth/10, this.TrashBinHeight+20);
        pop();

        push();
        translate(lpos.x, lpos.y);
        rectMode(CENTER);
        //noStroke();
        fill("chocolate");
        rect(0, 0, this.TrashBinWidth/10, this.TrashBinHeight+20);
        pop();

        push();
        translate(dpos.x, dpos.y+10)
        rectMode(CENTER);        
        //noStroke();
        fill("chocolate");
        imageMode(CENTER);
        image(this.image, 0, -this.TrashBinHeight, this.TrashBinWidth, this.TrashBinHeight+100);
        pop();
    }
}