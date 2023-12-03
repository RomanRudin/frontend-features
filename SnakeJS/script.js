const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;




let grid = 16;
let count = 0;
let snake = {
    speed: 4,
    x: 0,
    y: 0,
    dx: grid,
    dy: 0,
    tails: [],
    countTails: 4,
};
let food = {
    x: 0,
    y: 0,
};


function getRnadomInt(min, max){
    return Math.floor(Math.random() * (max - min) )+ min;
};

function clear(){
    canvas.height = canvas.height;
    canvas.width = canvas.width;
};

function start(){
    requestAnimationFrame(start);
    if (count++ < snake.speed){
        return;
    }
    count = 0;
    clear();
    drawSnake();
    drawFood();
    finish();
};

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, grid - 1, grid - 1);
    if ((snake.x === food.x) && (snake.y === food.y)){
        snake.countTails++;
        food.x = getRnadomInt(0, canvas.width / grid) * grid;
        food.y = getRnadomInt(0, canvas.height / grid) * grid;
    };
};

function drawSnake(){
    snake.x += snake.dx;
    snake.y += snake.dy;
    if (snake.x < 0){
        snake.x = canvas.width - grid;
    } else if (snake.x >= canvas.width){
        snake.x = 0;
    };
    if (snake.y < 0){
        snake.y = canvas.width - grid;
    } else if (snake.y >= canvas.width){
        snake.y = 0;
    };
    snake.tails.unshift({
        x: snake.x,
        y: snake.y,
    });
    if (snake.tails.length > snake.countTails){
        snake.tails.pop();
    };
    snake.tails.forEach((tail, index) => {
        context.fillStyle = "green";
        context.fillRect(tail.x, tail.y, grid - 1, grid - 1);
    });
    
};

function finish(){
    for (let i = 0; i < snake.tails.length - 1; i++){
        for(let j = i + 1; i < snake.tails.length; j++){
            firstSegment = snake.tails[i];
            secondSegment = snake.tails[j];
            if ((firstSegment.x == secondSegment.x) && (firstSegment.y == secondSegment.y)){
                snake.x = 0;
                snake.y = 0;
                snake.tails = [];
                snake.countTails = 3;
                snake.dx = grid;
                snake.dy = 0;
            }
        };
    };
};

document.addEventListener("keydown", (e) => {
        console.log(e.code)
        if ((e.code == "KeyA") && (snake.dx == 0)){ 
            snake.dx = -grid;
            snake.dy = 0;
        } else if ((e.code == "KeyS") && (snake.dy == 0)){ 
            snake.dx = 0;
            snake.dy = grid;
        } else if ((e.code == "KeyD") && (snake.dx == 0)){ 
            snake.dx = grid;
            snake.dy = 0;
        } else if ((e.code == "KeyW") && (snake.dy == 0)){ 
            snake.dx = 0;
            snake.dy = -grid;
        };
    }
)

requestAnimationFrame(start);