let canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
let c = canvas.getContext("2d");
let smileyCenterX = 200; /*Cannot be lower than 60 or higher than 340 */
let smileyCenterY = 200; /*Cannot be lower than 60 or higher than 340 */
drawSmiley();

function drawSmiley() {
    /*Smiley bodey*/
    c.fillStyle = "yellowgreen";
    c.beginPath();
    c.arc(smileyCenterX, smileyCenterY, 60, 0, (2 * Math.PI));
    c.fill();
    c.strokeStyle = "black";
    c.stroke();

    /*Smiley left eye */
    c.fillStyle = "black";
    c.beginPath();
    c.arc((smileyCenterX - 25), (smileyCenterY - 30), 10, 0, (2 * Math.PI));
    c.fill();


    /*Smiley right eye */
    c.beginPath();
    c.arc((smileyCenterX + 25), (smileyCenterY - 30), 10, 0, (2 * Math.PI));
    c.fill();

    /*Smiley mouth */
    c.beginPath();
    c.arc(smileyCenterX, (smileyCenterY + 10), 40, 0, Math.PI);
    c.stroke();

    console.log("centerX = " + smileyCenterX + "    centerY = " + smileyCenterY);
}



document.getElementById("left").onclick = goLeft;
document.getElementById("right").onclick = goRight;
document.getElementById("down").onclick = goDown;
document.getElementById("up").onclick = goUp;
document.getElementById("reset").onclick = resetti;
document.addEventListener('keyup', function (event) {
    switch (event.key) {
        case "ArrowLeft":
            event.preventDefault;
            goLeft();
            break;
        case "ArrowRight":
            event.preventDefault;
            goRight();
            break;
        case "ArrowUp":
            event.preventDefault;
            goUp();
            break;
        case "ArrowDown":
            event.preventDefault;
            goDown();
            break;
    }
})

function resetti() {
    c.beginPath();
    smileyCenterX = 200;
    smileyCenterY = 200;
    clearCanvas();
    drawSmiley();
    console.log("resetti");
}

function clearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
}

function goLeft() {
    if (smileyCenterX != 60) {
        smileyCenterX -= 5;
        clearCanvas();
        drawSmiley();
    }
}

function goRight() {
    if (smileyCenterX != 340) {
        smileyCenterX += 5;
        clearCanvas();
        drawSmiley();
    }
}

function goDown() {
    if (smileyCenterY != 340) {
        smileyCenterY += 5;
        clearCanvas();
        drawSmiley();
    }
}

function goUp() {
    if (smileyCenterY != 60) {
        smileyCenterY -= 5;
        clearCanvas();
        drawSmiley();
    }
}