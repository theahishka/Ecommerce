const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");

const colorType = document.getElementById("color-type");

colorOne.addEventListener("click", function () {
    colorOne.style.border = "1px solid rgb(119, 31, 31)";
    colorTwo.style.border = "1px solid grey";

    colorType.innerHTML = "Earl Grey";

    showcaseImageOne.setAttribute("src", "./knitwear6/earlyGrey/earl1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear6/earlyGrey/earl2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear6/earlyGrey/earl3.jpg");
});

colorTwo.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid rgb(119, 31, 31)";

    colorType.innerHTML = "Smoked Pearl";

    showcaseImageOne.setAttribute("src", "./knitwear6/smokedpearl/pearl1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear6/smokedpearl/pearl2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear6/smokedpearl/pearl3.jpg");
});
