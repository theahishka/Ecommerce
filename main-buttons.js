const dot = document.querySelectorAll(".dot");
const dotOne = document.querySelector(".dot1");
const dotTwo = document.querySelector(".dot2");
const dotThree = document.querySelector(".dot3");
const dotFour = document.querySelector(".dot4");
const dotFive = document.querySelector(".dot5");

const arrowLeft = document.querySelector(".a-left");
const arrowRight = document.querySelector(".a-right");

const visible = document.querySelector(".visible1");

dotOne.addEventListener("click", firstDot);
dotTwo.addEventListener("click", secondDot);
dotThree.addEventListener("click", thirdDot);
dotFour.addEventListener("click", fourthDot);
dotFive.addEventListener("click", fifthDot);

let clickButton = 1;

function firstDot() {
    dotOne.style.backgroundColor = "hsl(0, 100%, 15.6%)";
    dotTwo.style.backgroundColor = "rgb(161, 161, 161)";
    dotThree.style.backgroundColor = "rgb(161, 161, 161)";
    dotFour.style.backgroundColor = "rgb(161, 161, 161)";
    dotFive.style.backgroundColor = "rgb(161, 161, 161)";
    visible.style.transform = "translateX(0%)";
    clickButton = 1;
    arrowLeft.style.borderColor = "rgb(161, 161, 161";
    arrowLeft.style.cursor = "default";
    arrowRight.style.borderColor = "black";
    arrowRight.style.cursor = "pointer";
}

function secondDot() {
    dotOne.style.backgroundColor = "rgb(161, 161, 161)";
    dotTwo.style.backgroundColor = "hsl(0, 100%, 15.6%)";
    dotThree.style.backgroundColor = "rgb(161, 161, 161)";
    dotFour.style.backgroundColor = "rgb(161, 161, 161)";
    dotFive.style.backgroundColor = "rgb(161, 161, 161)";
    visible.style.transform = "translateX(-12.5%)";
    clickButton = 2;
    arrowLeft.style.borderColor = "black";
    arrowLeft.style.cursor = "pointer";
    arrowRight.style.borderColor = "black";
    arrowRight.style.cursor = "pointer";
}

function thirdDot() {
    dotOne.style.backgroundColor = "rgb(161, 161, 161)";
    dotTwo.style.backgroundColor = "rgb(161, 161, 161)";
    dotThree.style.backgroundColor = "hsl(0, 100%, 15.6%)";
    dotFour.style.backgroundColor = "rgb(161, 161, 161)";
    dotFive.style.backgroundColor = "rgb(161, 161, 161)";
    visible.style.transform = "translateX(-25%)";
    clickButton = 3;
    arrowLeft.style.borderColor = "black";
    arrowLeft.style.cursor = "pointer";
    arrowRight.style.borderColor = "black";
    arrowRight.style.cursor = "pointer";
}

function fourthDot() {
    dotOne.style.backgroundColor = "rgb(161, 161, 161)";
    dotTwo.style.backgroundColor = "rgb(161, 161, 161)";
    dotThree.style.backgroundColor = "rgb(161, 161, 161)";
    dotFour.style.backgroundColor = "hsl(0, 100%, 15.6%)";
    dotFive.style.backgroundColor = "rgb(161, 161, 161)";
    visible.style.transform = "translateX(-37.5%)";
    clickButton = 4;
    arrowLeft.style.borderColor = "black";
    arrowRight.style.borderColor = "black";
    arrowRight.style.cursor = "pointer";
    arrowLeft.style.cursor = "pointer";
}

function fifthDot() {
    dotOne.style.backgroundColor = "rgb(161, 161, 161)";
    dotTwo.style.backgroundColor = "rgb(161, 161, 161)";
    dotThree.style.backgroundColor = "rgb(161, 161, 161)";
    dotFour.style.backgroundColor = "rgb(161, 161, 161)";
    dotFive.style.backgroundColor = "hsl(0, 100%, 15.6%)";
    visible.style.transform = "translateX(-50%)";
    clickButton = 5;
    arrowLeft.style.borderColor = "black";
    arrowLeft.style.cursor = "pointer";
    arrowRight.style.borderColor = "rgb(161, 161, 161)";
    arrowRight.style.cursor = "default";
}

arrowRight.addEventListener("click", moveRight);
arrowLeft.addEventListener("click", moveLeft);

function moveRight() {
    if (window.innerWidth > 800) {
        if (clickButton === 1) {
            secondDot();
            arrowLeft.style.borderColor = "black";
            arrowLeft.style.cursor = "pointer";
        } else if (clickButton === 2) {
            thirdDot();
            arrowLeft.style.borderColor = "black";
            arrowLeft.style.cursor = "pointer";
        } else if (clickButton === 3) {
            fourthDot();
            arrowLeft.style.borderColor = "black";
            arrowLeft.style.cursor = "pointer";
        } else if (clickButton === 4) {
            fifthDot();
            arrowLeft.style.borderColor = "black";
            arrowLeft.style.cursor = "pointer";
            arrowRight.style.borderColor = "rgb(161, 161, 161)";
            arrowRight.style.cursor = "default";
        }
    } else {
        if (clickButton === 1) {
            fifthDot();
            arrowLeft.style.borderColor = "black";
            arrowLeft.style.cursor = "pointer";
            arrowRight.style.borderColor = "rgb(161, 161, 161)";
            arrowRight.style.cursor = "default";
        }
    }
}

function moveLeft() {
    if (window.innerWidth > 800) {
        if (clickButton === 5) {
            fourthDot();
            arrowRight.style.borderColor = "black";
            arrowRight.style.cursor = "pointer";
        } else if (clickButton === 4) {
            thirdDot();
            arrowRight.style.borderColor = "black";
            arrowRight.style.cursor = "pointer";
        } else if (clickButton === 3) {
            secondDot();
            arrowRight.style.borderColor = "black";
            arrowRight.style.cursor = "pointer";
        } else if (clickButton === 2) {
            firstDot();
            arrowRight.style.borderColor = "black";
            arrowRight.style.cursor = "pointer";
            arrowLeft.style.borderColor = "rgb(161, 161, 161";
            arrowLeft.style.cursor = "default";
        }
    } else {
        if (clickButton === 5) {
            firstDot();
            arrowRight.style.borderColor = "black";
            arrowRight.style.cursor = "pointer";
            arrowLeft.style.borderColor = "rgb(161, 161, 161";
            arrowLeft.style.cursor = "default";
        }
    }
}
