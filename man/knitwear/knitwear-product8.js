const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");
const colorThree = document.querySelector(".color3");

const colorType = document.getElementById("color-type");

colorOne.addEventListener("click", function () {
    colorOne.style.border = "1px solid rgb(119, 31, 31)";
    colorTwo.style.border = "1px solid grey";
    colorThree.style.border = "1px solid grey";

    colorType.innerHTML = "Almondine";

    showcaseImageOne.setAttribute("src", "./knitwear8/almondine/almo1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear8/almondine/almo2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear8/almondine/almo3.jpg");
});

colorTwo.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid rgb(119, 31, 31)";
    colorThree.style.border = "1px solid grey";

    colorType.innerHTML = "Brick";

    showcaseImageOne.setAttribute("src", "./knitwear8/brick/brick1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear8/brick/brick2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear8/brick/brick3.jpg");
});

colorThree.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid grey";
    colorThree.style.border = "1px solid rgb(119, 31, 31)";

    colorType.innerHTML = "Ocean";

    showcaseImageOne.setAttribute("src", "./knitwear8/ocean/ocean1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear8/ocean/ocean2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear8/ocean/ocean3.jpg");
});
