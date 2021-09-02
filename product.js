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

// Details Animation

const productDetailsVisible = document.querySelector(
    ".product-details-visible"
);
const careVisible = document.querySelector(".care-visible");
const shippingVisible = document.querySelector(".shipping-visible");
const paymentVisible = document.querySelector(".payment-visible");

const productDetailsInvisible = document.querySelector(
    ".product-details-invisible"
);
const careInvisible = document.querySelector(".care-invisible");
const shippingInvisible = document.querySelector(".shipping-invisible");
const paymentInvisible = document.querySelector(".payment-invisible");

const productDetailsArrow = document.querySelector(".product-details-arrow");
const careArrow = document.querySelector(".care-arrow");
const shippingArrow = document.querySelector(".shipping-arrow");
const paymentArrow = document.querySelector(".payment-arrow");

let productDetailsOpen = false;
let careOpen = false;
let shippingOpen = false;
let paymentOpen = false;

productDetailsVisible.addEventListener("click", function () {
    if (productDetailsOpen === false) {
        productDetailsOpen = true;
        productDetailsInvisible.style.maxHeight = "200px";
        productDetailsInvisible.style.margin = "2rem auto 1rem auto";
        productDetailsArrow.style.transform = "translateX(-20%) rotate(45deg)";
    } else if (productDetailsOpen === true) {
        productDetailsOpen = false;
        productDetailsInvisible.style.maxHeight = "0";
        productDetailsInvisible.style.margin = "0";
        productDetailsArrow.style.transform =
            "translateX(-20%) rotate(-135deg)";
    }
});

careVisible.addEventListener("click", function () {
    if (careOpen === false) {
        careOpen = true;
        careInvisible.style.maxHeight = "300px";
        careInvisible.style.margin = "2rem auto 1rem auto";
        careArrow.style.transform = "translateX(-20%) rotate(45deg)";
    } else if (careOpen === true) {
        careOpen = false;
        careInvisible.style.maxHeight = "0";
        careInvisible.style.margin = "0";
        careArrow.style.transform = "translateX(-20%) rotate(-135deg)";
    }
});

shippingVisible.addEventListener("click", function () {
    if (shippingOpen === false) {
        shippingOpen = true;
        shippingInvisible.style.maxHeight = "300px";
        shippingInvisible.style.margin = "2rem auto 1rem auto";
        shippingArrow.style.transform = "translateX(-20%) rotate(45deg)";
    } else if (shippingOpen === true) {
        shippingOpen = false;
        shippingInvisible.style.maxHeight = "0";
        shippingInvisible.style.margin = "0";
        shippingArrow.style.transform = "translateX(-20%) rotate(-135deg)";
    }
});

paymentVisible.addEventListener("click", function () {
    if (paymentOpen === false) {
        paymentOpen = true;
        paymentInvisible.style.maxHeight = "500px";
        paymentInvisible.style.margin = "2rem auto 1rem auto";
        paymentArrow.style.transform = "translateX(-20%) rotate(45deg)";
    } else if (paymentOpen === true) {
        paymentOpen = false;
        paymentInvisible.style.maxHeight = "0";
        paymentInvisible.style.margin = "0";
        paymentArrow.style.transform = "translateX(-20%) rotate(-135deg)";
    }
});

// Size Animation

let sizeContOpen = false;

const sizeCont = document.querySelector(".size-cont");
const sizeArrow = document.querySelector(".size-arrow");
const sizeHidden = document.querySelector(".size-hidden");
const sizeNumberCont = document.querySelectorAll(".size-number-cont");

const sizeUl = document.querySelector(".size-ul");

const sizeP = document.querySelector(".size-p");

sizeCont.addEventListener("click", function () {
    if (sizeContOpen === false) {
        sizeContOpen = true;
        sizeHidden.style.maxHeight = "100px";
        sizeArrow.style.transform = "rotate(-45deg)";
        sizeUl.style.margin = "1rem auto";
    } else if (sizeContOpen === true) {
        sizeContOpen = false;
        sizeHidden.style.maxHeight = "0";
        sizeArrow.style.transform = "rotate(135deg)";
        sizeUl.style.margin = "0rem auto";
    }
});

sizeNumberCont.forEach((element) => {
    element.addEventListener("click", function (e) {
        sizeNumberCont.forEach((element) => {
            element.style.backgroundColor = "";
        });
        e.target.style.backgroundColor = "rgb(220, 220, 220)";
        sizeP.innerHTML = `${e.srcElement.childNodes[1].innerHTML}`;
    });
});

// Recommendations Loading for man

let allManProducts = [];

manKnitwearProducts.forEach((element) => {
    allManProducts.push(element);
});

allManProducts.sort(() => Math.random() - 0.5);

function loadRecommendations() {
    for (let i = 0; i < 8; i++) {
        const recCont = document.querySelector(".rec-cont");

        const recommendationAnchor = document.createElement("a");
        recommendationAnchor.classList.add("recommendation");
        recommendationAnchor.setAttribute("href", `${allManProducts[i].productSrc}`);

        const img = document.createElement("img");
        img.setAttribute("src", `${allManProducts[i].inSrc}`);
        img.setAttribute("alt", `${allManProducts[i].title}`);

        const h4 = document.createElement("h4");
        h4.classList.add("r-title");
        h4.innerHTML = `${allManProducts[i].title}`;

        const pComp = document.createElement("p");
        pComp.classList.add("r-title");
        pComp.innerHTML = `${allManProducts[i].composition}`;

        const pPrice = document.createElement("p");
        pPrice.classList.add("r-title");
        pPrice.innerHTML = `${allManProducts[i].price}$`;

        recCont.appendChild(recommendationAnchor);
        recommendationAnchor.appendChild(img);
        recommendationAnchor.appendChild(h4);
        recommendationAnchor.appendChild(pComp);
        recommendationAnchor.appendChild(pPrice);
    }
}

// Recommendations Loading for woman

let allWomanProducts = [];

allWomanProducts.sort(() => Math.random() - 0.5);

function loadRecommendationsWoman() {
    for (let i = 0; i < 8; i++) {
        const recCont = document.querySelector(".rec-cont");

        const recommendationAnchor = document.createElement("a");
        recommendationAnchor.classList.add("recommendation");
        recommendationAnchor.setAttribute("href", `${allWomanProducts[i].productSrc}`);

        const img = document.createElement("img");
        img.setAttribute("src", `${allWomanProducts[i].inSrc}`);
        img.setAttribute("alt", `${allWomanProducts[i].title}`);

        const h4 = document.createElement("h4");
        h4.classList.add("r-title");
        h4.innerHTML = `${allWomanProducts[i].title}`;

        const pComp = document.createElement("p");
        pComp.classList.add("r-title");
        pComp.innerHTML = `${allWomanProducts[i].composition}`;

        const pPrice = document.createElement("p");
        pPrice.classList.add("r-title");
        pPrice.innerHTML = `${allWomanProducts[i].price}$`;

        recCont.appendChild(recommendationAnchor);
        recommendationAnchor.appendChild(img);
        recommendationAnchor.appendChild(h4);
        recommendationAnchor.appendChild(pComp);
        recommendationAnchor.appendChild(pPrice);
    }
}

// check for gender

const gender = document.querySelector(".breadcrump").childNodes[1].childNodes[1].innerHTML.toLowerCase();

if (gender === "man") {
    loadRecommendations();
} else {
    loadRecommendationsWoman();
}