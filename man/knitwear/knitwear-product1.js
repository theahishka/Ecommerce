const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");
const colorThree = document.querySelector(".color3");
const colorFour = document.querySelector(".color4");

const colorType = document.getElementById("color-type");

colorOne.addEventListener("click", function () {
    colorOne.style.border = "1px solid rgb(119, 31, 31)";
    colorTwo.style.border = "1px solid grey";
    colorThree.style.border = "1px solid grey";
    colorFour.style.border = "1px solid grey";

    colorType.innerHTML = "Yellow Moroccan";

    showcaseImageOne.setAttribute("src", "./knitwear1/crewneck1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear1/crewneck2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear1/crewneck3.jpg");
});

colorTwo.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid rgb(119, 31, 31)";
    colorThree.style.border = "1px solid grey";
    colorFour.style.border = "1px solid grey";

    colorType.innerHTML = "Navy Blue";

    showcaseImageOne.setAttribute("src", "./knitwear1/blue/knitwear blue1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear1/blue/knitwear blue2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear1/blue/knitwear blue3.jpg");
});

colorThree.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid grey";
    colorThree.style.border = "1px solid rgb(119, 31, 31)";
    colorFour.style.border = "1px solid grey";

    colorType.innerHTML = "Pueblo";

    showcaseImageOne.setAttribute("src", "./knitwear1/Pueblo/pueblo1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear1/Pueblo/pueblo2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear1/Pueblo/pueblo3.jpg");
});

colorFour.addEventListener("click", function () {
    colorOne.style.border = "1px solid grey";
    colorTwo.style.border = "1px solid grey";
    colorThree.style.border = "1px solid grey";
    colorFour.style.border = "1px solid rgb(119, 31, 31)";

    colorType.innerHTML = "Grey Ice";

    showcaseImageOne.setAttribute("src", "./knitwear1/grey/grey1.jpg");
    showcaseImageTwo.setAttribute("src", "./knitwear1/grey/grey2.jpg");
    showcaseImageThree.setAttribute("src", "./knitwear1/grey/grey3.jpg");
});
