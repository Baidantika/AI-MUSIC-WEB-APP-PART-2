song_1="";
song_2="";
function setup(){
    canvas=createCanvas(500,500);
canvas.position(500,200);

video=createCapture(VIDEO);
video.hide();
}
function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,500,500);
}
//function songname{
    //song.play();
//}