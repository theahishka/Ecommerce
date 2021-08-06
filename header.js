const searchBox = document.getElementById("search-box");
const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("mouseover", searchBoxIn);
searchBar.addEventListener("mouseout", searchBoxOut);

const navBar = document.querySelector("nav");
const navButtons = document.getElementById("nav-btns");
const header = document.querySelector("header");
const cart = document.querySelector(".cart");
const account = document.querySelector(".account");
const closeSearch = document.querySelector(".close-search");
const searchWindow = document.querySelector(".search-window");
const cartWindow = document.querySelector(".cart-window");
const accountWindow = document.querySelector(".account-window");

searchBox.addEventListener("focus", searchBoxOpen);
searchBox.addEventListener("blur", searchBoxClose);
closeSearch.addEventListener("click", closeSearchBox);

function searchBoxIn() {
    searchBar.style.backgroundColor = "rgb(230, 230, 230)";
    searchBox.style.backgroundColor = "rgb(230, 230, 230)";
}

function searchBoxOut() {
    searchBar.style.backgroundColor = "rgb(240, 240, 240)";
    searchBox.style.backgroundColor = "rgb(240, 240, 240)";
}

function searchBoxOpen() {
    searchBar.style.backgroundColor = "rgb(230, 230, 230)";
    searchBox.style.backgroundColor = "rgb(230, 230, 230)";

    // Cart Window Close
    if (cartWindow.getBoundingClientRect().x < window.innerWidth) {
        cartWindow.classList.toggle("cart-open");
    }

    if (accountWindow.getBoundingClientRect().x < window.innerWidth) {
        accountWindow.classList.toggle("account-open");
    }

    if (searchBar.getBoundingClientRect().width < window.innerWidth / 2) {
        navBar.style.opacity = "0";
        cart.style.opacity = "0";
        account.style.opacity = "0";
        searchBar.style.transform = "scale(0)";
        setTimeout(function () {
            navBar.style.display = "none";
            cart.style.display = "none";
            account.style.display = "none";
        }, 200);

        setTimeout(function () {
            navButtons.style.gridColumnStart = "2";
            navButtons.style.gridColumnEnd = "3";
            navButtons.style.marginRight = "0";
            navButtons.style.justifyContent = "center";
            header.style.gridTemplate = "1fr / 15% 1fr 15%";
            searchBar.style.transform = "scale(1)";

            // search window
            searchWindow.style.transform = "translateY(0%)";
        }, 250);

        setTimeout(function () {
            searchBar.style.width = `${window.innerWidth / 2}px`;
            searchBox.style.width = `calc(${window.innerWidth / 2}px - 3rem)`;
            closeSearch.style.display = "block";
            closeSearch.style.opacity = "1";
        }, 350);
    }
}

function closeSearchBox() {
    searchBar.style.width = "10rem";
    searchBox.style.width = "6.5rem";
    closeSearch.style.opacity = "0";

    setTimeout(function () {
        closeSearch.style.display = "none";
        searchBar.style.transform = "scale(0)";

        // search window
        searchWindow.style.transform = "translateY(-120%)";
    }, 150);

    setTimeout(function () {
        navButtons.style.gridColumnStart = "3";
        navButtons.style.gridColumnEnd = "4";
        navButtons.style.marginRight = "3rem";
        navButtons.style.justifyContent = "right";
        header.style.gridTemplate = "1fr / 30% 1fr 30%";
        searchBar.style.transform = "scale(1)";
        navBar.style.display = "block";
        cart.style.display = "block";
        account.style.display = "block";
    }, 300);

    setTimeout(function () {
        navBar.style.opacity = "1";
        cart.style.opacity = "1";
        account.style.opacity = "1";
    }, 350);
}

function searchBoxClose() {
    searchBar.style.backgroundColor = "rgb(240, 240, 240)";
    searchBox.style.backgroundColor = "rgb(240, 240, 240)";
}

// Cart
cart.addEventListener("click", openCart);
account.addEventListener("click", openAccount);

function openCart() {
    cartWindow.classList.toggle("cart-open");
    if (accountWindow.getBoundingClientRect().x < window.innerWidth) {
        accountWindow.classList.toggle("account-open");
    }
}

function openAccount() {
    accountWindow.classList.toggle("account-open");
    if (cartWindow.getBoundingClientRect().x < window.innerWidth) {
        cartWindow.classList.toggle("cart-open");
    }
}
