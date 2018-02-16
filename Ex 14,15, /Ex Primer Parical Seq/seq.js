
var startButton;
var pauseButton;
var isPlaying = 0;
var sounds = ['Bombo', 'Tarola', 'Hh', 'Pad', 'Tom'];

function setup() {
    startButton = createButton('start');
    startButton.position(19,250);
    startButton.mousePressed(playSeq);
    stopButton = createButton('stop');
    stopButton.position(59,250);
    stopButton.mousePressed(stopSeq);
}

function preload(){
    sounds[0] = loadSound('Sounds/Bombo.wav');
    sounds[1] = loadSound('Sounds/Tarola.wav');   
    sounds[2] = loadSound('Sounds/Hh.wav');   
    sounds[3] = loadSound('Sounds/Pad.wav');   
    sounds[4] = loadSound('Sounds/Tom.wav');
}

function playSeq(){
    if(isPlaying == 0){
        sequencer.start();
        isPlaying = 1;
    }
}

function stopSeq(){
    sequencer.stop();
    isPlaying = 0;
}

function playStep(v){
    for(i=0; i<v.length; i++){
        if(v[i] == 1){
            sounds[i].play();
        }
    }
}




