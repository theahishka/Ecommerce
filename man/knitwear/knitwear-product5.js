const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");

const colorType = document.getElementById("color-type");

colorOne.addEventListener("click", function () {
    colorOne.style.border = "1px solid rgb(119, 31, 31)";
    colorTwo.style.border = "1px solid grey";

    colorType.innerHTML = "Almondine";

    showcaseImageOne.setAttribute("src", "./knitwear5/almondine/alm1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear5/almondine/alm2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear5/almondine/alm3.jpg");
});

colorTwo.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid rgb(119, 31, 31)";

    colorType.innerHTML = "Navy Blue";

    showcaseImageOne.setAttribute("src", "./knitwear5/navy/navy1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear5/navy/navy2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear5/navy/navy3.jpg");
});
