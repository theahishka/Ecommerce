const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");

const colorType = document.getElementById("color-type");

colorOne.addEventListener("click", function () {
    colorOne.style.border = "1px solid rgb(119, 31, 31)";
    colorTwo.style.border = "1px solid grey";

    colorType.innerHTML = "Aqua";

    showcaseImageOne.setAttribute("src", "./knitwear3/Aqua Sky/aqua1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear3/Aqua Sky/aqua2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear3/Aqua Sky/aqua3.jpg");
});

colorTwo.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid rgb(119, 31, 31)";

    colorType.innerHTML = "Nighiri";

    showcaseImageOne.setAttribute("src", "./knitwear3/Nighiri/Nighiri1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear3/Nighiri/Nighiri2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear3/Nighiri/Nighiri3.jpg");
});
