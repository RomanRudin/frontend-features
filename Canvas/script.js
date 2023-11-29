
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 750;
canvas.height = 925;

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "blue";
context.fillStyle = "green";
context.rect(0, 0, 250, 250);
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "green";
context.fillStyle = "red";
context.arc(500, 188, 125, 0, radiant(180), true);
context.moveTo(625, 188);
context.lineTo(375, 188);
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "red";
context.fillStyle = "blue";
context.arc(125, 475, 125, radiant(25), radiant(300), false);
context.fill();
context.stroke();


context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "black";
context.fillStyle = "black";
context.rect(0, 625, 750, 300);
context.fill();
context.stroke();

let colors = ["green", "yellow", "red"];

let current = 0
setInterval(() => (generate()), 500);

function generate(){
    for (let i = 0; i < 3; i++){
        trafficLight(colors[i], 125 + 250 * i, 775, current == i)
    }
    console.log(current)
    current++;
    if (current > 2){
        current = 0;
    }
}

function trafficLight(color, x, y, fill=false){
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = color; 
    context.arc(x, y, 120, 0, radiant(360), true);
    if (fill){
        context.fillStyle = color;
        context.fill();
    }
    else{
        context.lineWidth = 5;   
        context.fillStyle = "black";
        context.fill();
        context.stroke();
    }
}

function radiant(a){
    return (a / 360) * 2 * Math.PI;
}

canvas.addEventListener('mousemove', function (event) {
    const x = event.clientX; 
    const y = event.clientY; 
    console.log(`Coordinates: x=${x}, y=${y}`); 
});