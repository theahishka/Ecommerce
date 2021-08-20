const questionOne = document.querySelector(".question1");
const questionTwo = document.querySelector(".question2");
const questionThree = document.querySelector(".question3");
const questionFour = document.querySelector(".question4");
const questionFive = document.querySelector(".question5");
const questionSix = document.querySelector(".question6");
const questionSeven = document.querySelector(".question7");
const questionEight = document.querySelector(".question8");
const questionNine = document.querySelector(".question9");
const questionTen = document.querySelector(".question10");

let questionOpenedOne = false;
let questionOpenedTwo = false;
let questionOpenedThree = false;
let questionOpenedFour = false;
let questionOpenedFive = false;
let questionOpenedSix = false;
let questionOpenedSeven = false;
let questionOpenedEight = false;
let questionOpenedNine = false;
let questionOpenedTen = false;

questionOne.addEventListener("click", function () {
    const answerOne = document.querySelector(".answer1");
    if (questionOpenedOne === false) {
        questionOpenedOne = true;
        answerOne.style.padding = "1rem";
        answerOne.style.maxHeight = "200px";
    } else  {
        questionOpenedOne = false;
        answerOne.style.padding = "0 1rem";
        answerOne.style.maxHeight = "0";
    }
});

questionTwo.addEventListener("click", function () {
    const answerTwo = document.querySelector(".answer2");
    if (questionOpenedTwo === false) {
        questionOpenedTwo = true;
        answerTwo.style.padding = "1rem";
        answerTwo.style.maxHeight = "100px";
    } else  {
        questionOpenedTwo = false;
        answerTwo.style.padding = "0 1rem";
        answerTwo.style.maxHeight = "0";
    }
});

questionThree.addEventListener("click", function () {
    const answerThree = document.querySelector(".answer3");
    if (questionOpenedThree === false) {
        questionOpenedThree = true;
        answerThree.style.padding = "1rem";
        answerThree.style.maxHeight = "500px";
    } else  {
        questionOpenedThree = false;
        answerThree.style.padding = "0 1rem";
        answerThree.style.maxHeight = "0";
    }
});

questionFour.addEventListener("click", function () {
    const answerFour = document.querySelector(".answer4");
    if (questionOpenedFour === false) {
        questionOpenedFour = true;
        answerFour.style.padding = "1rem";
        answerFour.style.maxHeight = "100px";
    } else  {
        questionOpenedFour = false;
        answerFour.style.padding = "0 1rem";
        answerFour.style.maxHeight = "0";
    }
});

questionFive.addEventListener("click", function () {
    const answerFive = document.querySelector(".answer5");
    if (questionOpenedFive === false) {
        questionOpenedFive = true;
        answerFive.style.padding = "1rem";
        answerFive.style.maxHeight = "200px";
    } else  {
        questionOpenedFive = false;
        answerFive.style.padding = "0 1rem";
        answerFive.style.maxHeight = "0";
    }
});

questionSix.addEventListener("click", function () {
    const answerSix = document.querySelector(".answer6");
    if (questionOpenedSix === false) {
        questionOpenedSix = true;
        answerSix.style.padding = "1rem";
        answerSix.style.maxHeight = "100px";
    } else  {
        questionOpenedSix = false;
        answerSix.style.padding = "0 1rem";
        answerSix.style.maxHeight = "0";
    }
});