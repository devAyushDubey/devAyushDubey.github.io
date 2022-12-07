console.log("Running")

var cnv;
var img;
var blu;
var fnt;
var back;
var next;
var playbtn;
var playholder;
var playState = false;
var music;
var amp;
var level;
var w = 200;
var h = 200; 

function preload(){
    img = loadImage('images/wow.jpeg');
    blu = loadImage('images/blur.png');
    fnt = loadFont('fonts/GothamMedium.ttf');
    back = loadImage('images/back.png');
    next = loadImage('images/next.png');
    playbtn = loadImage('images/playbtn.png');
    pausebtn = loadImage('images/pause.png');
    soundFormats('mp3');
    music = loadSound('sounds/sound1');
    playholder = playbtn;
}

function centerCanvas(){
    var x = (windowWidth - width)/2;
    cnv.position(x,0);
    //console.log(canvas);
}

function setup() {
    cnv = createCanvas(400, 400);
    cnv.style('margin-top','3em');
    amp = new p5.Amplitude();
    centerCanvas();
}
  
function draw() {
    background(220);
    //console.log(x);
    fill(200,0,0);
    image(img,0,0,400,400);
    filter(BLUR,25);
    filter(DILATE);
    image(img,87.5,35,225,225);
    fill("white");
    textStyle(BOLD);
    textFont(fnt);
    textAlign(CENTER);
    textSize(18);
    text("Man On The Moon",200,285);
    image(playholder,175,315,50,50);
    image(next,260,330,20,20);
    image(back,120,330,20,20);
    level = amp.getLevel();
    console.log(level);
    //centerCanvas(img);
}

function windowResized() {
    centerCanvas();
    //centerCanvas(img);
}

function mousePressed(){
    //console.log(playholder);
    if(mouseX >= 175 && mouseX <= 225 && mouseY >= 315 && mouseY <= 365){
        if(!playState){
            playState = true;
            playholder = pausebtn;
            music.play();
        }
        else{
            playState = false;
            playholder = playbtn;
            music.pause();
        }
        
    }
        
}