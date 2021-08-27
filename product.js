const arrowedCont = document.querySelector(".arrowed-cont");

const showcaseImageOne = document.getElementById("showcase-img1");
const showcaseImageTwo = document.getElementById("showcase-img2");
const showcaseImageThree = document.getElementById("showcase-img3");

const showcaseDotOne = document.getElementById("showcase-dot1");
const showcaseDotTwo = document.getElementById("showcase-dot2");
const showcaseDotThree = document.getElementById("showcase-dot3");

const arrowToLeft = document.querySelector(".arrow-to-left");
const arrowToRight = document.querySelector(".arrow-to-right");

let showcasePic = 1;

// Arrows Logic

arrowToRight.addEventListener("click", function () {
    if (showcasePic === 1) {
        arrowedCont.style.transform = "translateX(-37.5%)";
        showcaseImageOne.style.opacity = "0";
        showcaseImageOne.style.transform = "scale(0.5)";
        showcaseImageTwo.style.opacity = "1";
        showcaseImageTwo.style.transform = "scale(1)";
        showcasePic = 2;

        showcaseDotOne.style.backgroundColor = "grey";
        showcaseDotTwo.style.backgroundColor = "rgb(119, 31, 31)";
        showcaseDotThree.style.backgroundColor = "grey";
    } else if (showcasePic === 2) {
        arrowedCont.style.transform = "translateX(-75%)";
        showcaseImageTwo.style.opacity = "0";
        showcaseImageTwo.style.transform = "scale(0.5)";
        showcaseImageThree.style.opacity = "1";
        showcaseImageThree.style.transform = "scale(1)";
        showcasePic = 3;

        showcaseDotOne.style.backgroundColor = "grey";
        showcaseDotTwo.style.backgroundColor = "grey";
        showcaseDotThree.style.backgroundColor = "rgb(119, 31, 31)";
    } else if (showcasePic === 3) {
        arrowedCont.style.transform = "translateX(0)";
        showcaseImageThree.style.opacity = "0";
        showcaseImageThree.style.transform = "scale(0.5)";
        showcaseImageOne.style.opacity = "1";
        showcaseImageOne.style.transform = "scale(1)";
        showcasePic = 1;

        showcaseDotOne.style.backgroundColor = "rgb(119, 31, 31)";
        showcaseDotTwo.style.backgroundColor = "grey";
        showcaseDotThree.style.backgroundColor = "grey";
    }
});

arrowToLeft.addEventListener("click", function () {
    if (showcasePic === 3) {
        arrowedCont.style.transform = "translateX(-37.5%)";
        showcaseImageThree.style.opacity = "0";
        showcaseImageThree.style.transform = "scale(0.5)";
        showcaseImageTwo.style.opacity = "1";
        showcaseImageTwo.style.transform = "scale(1)";
        showcasePic = 2;

        showcaseDotOne.style.backgroundColor = "grey";
        showcaseDotTwo.style.backgroundColor = "rgb(119, 31, 31)";
        showcaseDotThree.style.backgroundColor = "grey";
    } else if (showcasePic === 2) {
        arrowedCont.style.transform = "translateX(0)";
        showcaseImageTwo.style.opacity = "0";
        showcaseImageTwo.style.transform = "scale(0.5)";
        showcaseImageOne.style.opacity = "1";
        showcaseImageOne.style.transform = "scale(1)";
        showcasePic = 1;

        showcaseDotOne.style.backgroundColor = "rgb(119, 31, 31)";
        showcaseDotTwo.style.backgroundColor = "grey";
        showcaseDotThree.style.backgroundColor = "grey";
    } else if (showcasePic === 1) {
        arrowedCont.style.transform = "translateX(-75%)";
        showcaseImageOne.style.opacity = "0";
        showcaseImageOne.style.transform = "scale(0.5)";
        showcaseImageThree.style.opacity = "1";
        showcaseImageThree.style.transform = "scale(1)";
        showcasePic = 3;

        showcaseDotOne.style.backgroundColor = "grey";
        showcaseDotTwo.style.backgroundColor = "grey";
        showcaseDotThree.style.backgroundColor = "rgb(119, 31, 31)";
    }
});

// Showcase Dots Logic

showcaseDotOne.addEventListener("click", function () {
    arrowedCont.style.transform = "translateX(0)";
    showcaseImageOne.style.opacity = "1";
    showcaseImageOne.style.transform = "scale(1)";
    showcaseImageTwo.style.opacity = "0";
    showcaseImageTwo.style.transform = "scale(0.5)";
    showcaseImageThree.style.opacity = "0";
    showcaseImageThree.style.transform = "scale(0.5)";

    showcasePic = 1;

    showcaseDotOne.style.backgroundColor = "rgb(119, 31, 31)";
    showcaseDotTwo.style.backgroundColor = "grey";
    showcaseDotThree.style.backgroundColor = "grey";
});

showcaseDotTwo.addEventListener("click", function () {
    arrowedCont.style.transform = "translateX(-37.5%)";
    showcaseImageOne.style.opacity = "0";
    showcaseImageOne.style.transform = "scale(0.5)";
    showcaseImageTwo.style.opacity = "1";
    showcaseImageTwo.style.transform = "scale(1)";
    showcaseImageThree.style.opacity = "0";
    showcaseImageThree.style.transform = "scale(0.5)";

    showcasePic = 2;

    showcaseDotOne.style.backgroundColor = "grey";
    showcaseDotTwo.style.backgroundColor = "rgb(119, 31, 31)";
    showcaseDotThree.style.backgroundColor = "grey";
});

showcaseDotThree.addEventListener("click", function () {
    arrowedCont.style.transform = "translateX(-75%)";
    showcaseImageOne.style.opacity = "0";
    showcaseImageOne.style.transform = "scale(0.5)";
    showcaseImageTwo.style.opacity = "0";
    showcaseImageTwo.style.transform = "scale(0.5)";
    showcaseImageThree.style.opacity = "1";
    showcaseImageThree.style.transform = "scale(1)";

    showcasePic = 3;

    showcaseDotOne.style.backgroundColor = "grey";
    showcaseDotTwo.style.backgroundColor = "grey";
    showcaseDotThree.style.backgroundColor = "rgb(119, 31, 31)";
});
