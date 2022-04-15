status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(480,380);
    canvas.position(480,390);

    video = createCapture(VIDEO);
    video.size(480,390);
    video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
    input = document.getElementById("finder").value
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}