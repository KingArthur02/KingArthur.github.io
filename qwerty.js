console.log("QWERTY");

var osc;
var env;
var canvas; 
var slider;
var freq;
var octave;
var circle;

    function setup(){
    createCanvas (850,450);
    background (100, 100, 100);

    env = new p5.Env(0,0.1,0.2,0.5,1);    
    osc = new p5.Oscillator("triangle");
    osc.amp(0.5);
    osc.freq(440);
    osc.start();

    slider = createSlider(0, 1, 50);
    slider.position(455, 193);

    var fader;
  fill(160,160,160);
  fader = rect(50, 20, 225,60);
    }
    function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
    }

    function draw(){

        vol = slider.value();
        strokeWeight(5);
              var title;
        fill(200,200,200);
        title = rect(40, 30, 275,80);
    }

function keyPressed(){
    console.log("You pressed the key"+ key);
    var freq=0; 
    switch(key){
        case "Q":
          freq = 261.63;
        break;
        case "2":
          freq = 277.18;
        break;
        case "W":
          freq = 293.66;
        break;
        case "3":
          freq = 311.13;
        break;
        case "E":
          freq = 329.63;
        break;
        case "R":
          freq = 349.23;
        break;
        case "5":
          freq = 369.99;
        break;
        case "T":
          freq = 392.00;
        break;
        case "6":
          freq = 415.30;
        break;
        case "Y":
          freq = 440.00;
        break;
        case "7":
          freq = 466.16;
        break;
        case "U":
          freq = 493.88;
        break;
        case "I":
          freq = 523.25;
        break;
        case "8":
          octave = 0;
        break;
        case "9":
          octave = 1;
        break;
    }

    if(octave == 1){
        freq = freq*2;
    }
    
    osc.freq(freq);
    osc.start();
    osc.amp(vol);
  
    fill(600,600,600);
    cirlce = ellipse( 380 ,70 ,70, 70);
  }
  
    function keyReleased(){
    osc.amp(0);

    cirlce.clear(200);
    background(10,10,10);
  }