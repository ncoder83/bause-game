var canvas ;
var context;

var frameRate = 1000/30;
var frame = 0;
var frames = [];
var assets = ['01.png','02.png'];

function setup(){
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for(var i = 0; i < assets.length; i++){
        frames.push(new Image());
        frames[i].onLoad = onImageLoad;
        frames[i].src = assets[i];

    }
    setInterval(animate, frameRate);
}

function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.drawImage(frames[frame], 50,50);
    frame = (frame + 1) % frames.length;
}

function onImageLoad(){

}
setup();