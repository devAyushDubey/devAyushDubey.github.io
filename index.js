console.log("index.js Running")

var canvasInstance;
var font;
var background, backgroundBlur;
var previousTrackBTN, nextTrackBTN, playBTN;
var playBTNholder;
var playState = false;
var music;
var amplitudeInstance;
var level;

function preload(){

    font = loadFont('fonts/GothamMedium.ttf');

    background = loadImage('images/wow.jpeg');
    backgroundBlur = loadImage('images/blur.png');

    previousTrackBTN = loadImage('images/back.png');
    nextTrackBTN = loadImage('images/next.png');
    playBTN = loadImage('images/playbtn.png');
    pausebtn = loadImage('images/pause.png');
    playBTNholder = playBTN;

    soundFormats('mp3');
    music = loadSound('sounds/sound1');
    
}

function setup() {
    canvasInstance = createCanvas(400, 400);
    canvasInstance.style('margin-top','3em');
    centerCanvas();

    amplitudeInstance = new p5.Amplitude(); 
}
  
function draw() {
    background(220);

    image(background,0,0,400,400);
    filter(BLUR,25);
    filter(DILATE);

    image(background,87.5,35,225,225);

    fill("white");
    textStyle(BOLD);
    textFont(font);
    textAlign(CENTER);
    textSize(18);
    text("Man On The Moon",200,285);

    image(playBTNholder,175,315,50,50);
    image(nextTrackBTN,260,330,20,20);
    image(previousTrackBTN,120,330,20,20);

    level = amplitudeInstance.getLevel();
}

function windowResized() {
    centerCanvas();
}

function mousePressed(){
    if(mouseX >= 175 && mouseX <= 225 && mouseY >= 315 && mouseY <= 365){
        if(!playState){
            playState = true;
            playBTNholder = pausebtn;
            music.play();
        }
        else{
            playState = false;
            playBTNholder = playBTN;
            music.pause();
        }
        
    }
        
}

function centerCanvas(){
    var x = (windowWidth - width)/2;
    canvasInstance.position(x,0);
}
