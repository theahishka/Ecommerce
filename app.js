const searchBox = document.getElementById("search-box");
const searchBar = document.querySelector(".search-bar")

searchBar.addEventListener("mouseover", searchBoxIn);
searchBar.addEventListener("mouseout", searchBoxOut);

const navBar = document.querySelector("nav");
const navButtons = document.querySelector(".nav-buttons");

searchBox.addEventListener("focus", searchBoxOpen);
// searchBox.addEventListener("blur",);


function searchBoxIn() {
    searchBar.style.backgroundColor = "rgb(230, 230, 230)";
    searchBox.style.backgroundColor = "rgb(230, 230, 230)";
}

function searchBoxOut() {
    searchBar.style.backgroundColor = "rgb(240, 240, 240)";
    searchBox.style.backgroundColor = "rgb(240, 240, 240)";
}

function searchBoxOpen() {
    // searchBar.style.width = "";
    navBar.style.display = "none";
    navButtons.style.gridRowStart = "1";
    navButtons.style.gridRowEnd = "2";
    navButtons.style.gridColumnStart = "2";
    navButtons.style.gridColumnEnd = "3";
    searchBar.style.width = "50rem";
    navButtons.style.justifySelf = "center";
}