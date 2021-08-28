const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");

const colorType = document.getElementById("color-type");

colorOne.addEventListener("click", function () {
    colorOne.style.border = "1px solid rgb(119, 31, 31)";
    colorTwo.style.border = "1px solid grey";

    colorType.innerHTML = "Black";

    showcaseImageOne.setAttribute("src", "./knitwear2/black/turtle1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear2/black/turtle2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear2/black/turtle3.jpg");
});

colorTwo.addEventListener("click", function() {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid rgb(119, 31, 31)";

    colorType.innerHTML = "Vicuna";

    showcaseImageOne.setAttribute("src", "./knitwear2/vicuna/turtlev1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear2/vicuna/turtlev2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear2/vicuna/turtlev3.jpg");
})