const subMenu = document.querySelector(".submenu");
const menuWindowContainer = document.querySelector(".menu-window-container");

const contForCont = document.querySelector(".cont-for-cont");

// New Releases

const newReleases = document.querySelector(".new-releases");
const newReleasesHidden = document.querySelector(".new-releases-hidden");
const newReleasesHiddenTitle = document.getElementById(
    "new-releases-hidden-title"
);

newReleases.addEventListener("click", openNewReleasesHidden);
newReleasesHiddenTitle.addEventListener("click", closeNewReleasesHidden);

function openNewReleasesHidden() {
    contForCont.style.transform = "translateX(-100%)";
    newReleasesHidden.style.display = "block";
}

function closeNewReleasesHidden() {
    contForCont.style.transform = "translateX(0)";
    setTimeout(function () {
        newReleasesHidden.style.display = "none";
    }, 200);
}

// Man

const men = document.querySelector(".men");
const manHidden = document.getElementById("man-hidden");
const manHiddenTitle = document.getElementById("man-hidden-title");

men.addEventListener("click", openManHidden);
manHiddenTitle.addEventListener("click", closeManHidden);

function openManHidden() {
    contForCont.style.transform = "translateX(-100%)";
    manHidden.style.display = "block";
}

function closeManHidden() {
    contForCont.style.transform = "translateX(0)";
    setTimeout(function () {
        manHidden.style.display = "none";
    }, 200);
}

// Woman

const women = document.querySelector(".women");
const womanHidden = document.getElementById("woman-hidden");
const womanHiddenTitle = document.getElementById("woman-hidden-title");

women.addEventListener("click", openWomanHidden);
womanHiddenTitle.addEventListener("click", closeWomanHidden);

function openWomanHidden() {
    contForCont.style.transform = "translateX(-100%)";
    womanHidden.style.display = "block";
}

function closeWomanHidden() {
    contForCont.style.transform = "translateX(0)";
    setTimeout(function () {
        womanHidden.style.display = "none";
    }, 200);
}

// Sale

const sale = document.querySelector(".sale");
const saleHidden = document.getElementById("sale-hidden");
const saleHiddenTitle = document.getElementById("sale-hidden-title");

sale.addEventListener("click", openSaleHidden);
saleHiddenTitle.addEventListener("click", closeSaleHidden);

function openSaleHidden() {
    contForCont.style.transform = "translateX(-100%)";
    saleHidden.style.display = "block";
}

function closeSaleHidden() {
    contForCont.style.transform = "translateX(0)";
    setTimeout(function () {
        saleHidden.style.display = "none";
    }, 200);
}
