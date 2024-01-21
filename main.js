function preload(){
}
function draw(){
    image(video,0,0,300,300);
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet model is initialized!");
}
function take_snapshot(){
    save('Photo.png');
}
function gotPoses(results){
    
    console.log(results);
    console.log("noseX="+results[0].pose.nose.x);
    console.log("noseY="+results[0].pose.nose.y);
}