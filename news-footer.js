const scrollArrow = document.querySelectorAll(".scroll-up");

scrollArrow.forEach((element) => {
    element.addEventListener("click", scrollToHero);
});

function scrollToHero() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

// Footer Menu
const chevronOne = document.getElementById("chevron1");
const chevronTwo = document.getElementById("chevron2");
const chevronThree = document.getElementById("chevron3");
const chevronFour = document.getElementById("chevron4");

const canOne = document.querySelector(".can1");
const canTwo = document.querySelector(".can2");
const canThree = document.querySelector(".can3");
const canFour = document.querySelector(".can4");

const hiddenOne = document.querySelector(".hidden1");
const hiddenTwo = document.querySelector(".hidden2");
const hiddenThree = document.querySelector(".hidden3");
const hiddenFour = document.querySelector(".hidden4");

let isHiddenOneOpened = false;
let isHiddenTwoOpened = false;
let isHiddenThreeOpened = false;
let isHiddenFourOpened = false;

canOne.addEventListener("click", openHiddenOne);
canTwo.addEventListener("click", openHiddenTwo);
canThree.addEventListener("click", openHiddenThree);
canFour.addEventListener("click", openHiddenFour);

function openHiddenOne() {
    if (window.innerWidth <= 960) {
        if (isHiddenOneOpened === false) {
            hiddenOne.style.maxHeight = "50px";
            chevronOne.style.transform = "rotateZ(180deg)";
            isHiddenOneOpened = true;
        } else {
            hiddenOne.style.maxHeight = "0px";
            chevronOne.style.transform = "rotateZ(0deg)";
            isHiddenOneOpened = false;
        }
    }
}

function openHiddenTwo() {
    if (window.innerWidth <= 960) {
        if (isHiddenTwoOpened === false) {
            hiddenTwo.style.maxHeight = "150px";
            chevronTwo.style.transform = "rotateZ(180deg)";
            isHiddenTwoOpened = true;
        } else {
            hiddenTwo.style.maxHeight = "0px";
            chevronTwo.style.transform = "rotateZ(0deg)";
            isHiddenTwoOpened = false;
        }
    }
}

function openHiddenThree() {
    if (window.innerWidth <= 960) {
        if (isHiddenThreeOpened === false) {
            hiddenThree.style.maxHeight = "150px";
            chevronThree.style.transform = "rotateZ(180deg)";
            isHiddenThreeOpened = true;
        } else {
            hiddenThree.style.maxHeight = "0px";
            chevronThree.style.transform = "rotateZ(0deg)";
            isHiddenThreeOpened = false;
        }
    }
}

function openHiddenFour() {
    if (window.innerWidth <= 960) {
        if (isHiddenFourOpened === false) {
            hiddenFour.style.maxHeight = "150px";
            chevronFour.style.transform = "rotateZ(180deg)";
            isHiddenFourOpened = true;
        } else {
            hiddenFour.style.maxHeight = "0px";
            chevronFour.style.transform = "rotateZ(0deg)";
            isHiddenFourOpened = false;
        }
    }
}
