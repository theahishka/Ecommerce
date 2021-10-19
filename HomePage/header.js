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

    // account window close
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
        navButtons.style.justifyContent = "flex-end";
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
// cart.addEventListener("click", openCart);
// account.addEventListener("click", openAccount);

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

// Window width 1100px

// Open Menu

const burger = document.querySelector(".burger");
const menuWindow = document.querySelector(".menu-window");
const body = document.body;
const rootElement = document.getElementById("root-element");

const burgerLineTop = document.querySelector(".line1");
const burgerLineBottom = document.querySelector(".line2");

const main = document.querySelector("main");
const newsLetter = document.querySelector(".newsletter");
const footer = document.querySelector(".footer");
const hero = document.querySelector(".hero");

// const contForCont = document.querySelector(".cont-for-cont");

burger.addEventListener("click", menuOpen);

function menuOpen() {
    if (menuWindow.getBoundingClientRect().x === 0) {
        rootElement.style.overflow = "scroll";
        body.style.overflowY = "scroll";
        menuWindow.style.transform = "translateX(-100%)";
        menuWindow.style.opacity = "0";
        burgerLineBottom.style.transform = "translateY(-6.6px) rotateZ(0)";
        burgerLineTop.style.transform = "translateY(6.6px) rotateZ(0)";

        contForCont.style.transform = "translateX(0)";
        setTimeout(function () {
            newReleasesHidden.style.display = "none";
            manHidden.style.display = "none";
            womanHidden.style.display = "none";
            saleHidden.style.display = "none";
        }, 200);

        setTimeout(function () {
            burgerLineTop.style.transform = "rotateZ(0) translateY(0)";
            burgerLineBottom.style.transform = "rotateZ(0) translateY(0)";
        }, 200);
    } else {
        rootElement.style.overflow = "hidden";
        body.style.overflowY = "hidden";
        menuWindow.style.transform = "translateX(0)";
        menuWindow.style.opacity = "1";
        burgerLineTop.style.transform = "translateY(6.6px)";
        burgerLineBottom.style.transform = "translateY(-6.6px)";

        setTimeout(function () {
            burgerLineTop.style.transform = "translateY(6.6px) rotateZ(45deg)";
            burgerLineBottom.style.transform =
                "translateY(-6.6px) rotateZ(-45deg)";
        }, 200);
    }
}

// Cart Logic

// update the subscript number on cart icon on header
function updateCartSub() {
    // stored cart items in local storage
    let existingCartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (existingCartItems !== null && existingCartItems.length > 0) {
        // array to store all item counts
        let itemCountArray = [];

        // push all item counts into an array
        existingCartItems.forEach((element) => {
            itemCountArray.push(element.itemCount);
        });

        // add all item counts together
        let subscriptNumber = itemCountArray.reduce((prevValue, curValue) => {
            return prevValue + curValue;
        });

        // get access to the subscript number
        const shoppingSub = document.querySelectorAll(".shopping-sub");

        // make the subscript number visible
        shoppingSub.forEach((element) => {
            element.style.display = "flex";
        });

        // set the subscript number in the div
        shoppingSub.forEach((element) => {
            element.innerText = `${subscriptNumber}`;
        });
    } else if (existingCartItems === null || existingCartItems.length === 0) {
        // get access to the subscript number
        const shoppingSub = document.querySelectorAll(".shopping-sub");

        // make the subscript number visible
        shoppingSub.forEach((element) => {
            element.style.display = "none";
        });
    }
}

updateCartSub();

// add to cart button
const addToCartButton = document.getElementById("add-to-cart");

// adding to cart function
function addToCart() {
    const productColor = document.getElementById("color-type").innerText;
    const productSize = document.querySelector(".size-p").innerText;
    const productTitle =
        document.getElementById("product-info-title").innerText;
    const productPrice = document.querySelector(".price").innerText;

    const productGender = document
        .querySelector(".breadcrump")
        .children[0].children[0].innerText.toLowerCase();
    const productType =
        document.querySelector(".breadcrump").children[0].children[1].innerText;

    let productDataBase = `${productGender}${productType}Products`;
    let imageSource;

    window[productDataBase].forEach((element) => {
        if (element.title === productTitle) {
            imageSource = element.inSrc;
        }
    });

    let productCartInfo = {
        productTitle: productTitle,
        productColor: productColor,
        productSize: productSize,
        productPrice: productPrice,
        imageSource: imageSource,
        gender: productGender,
        itemCount: 1,
    };

    if (localStorage.getItem("cartItems") === null) {
        // create new array
        let newCartArray = [];
        // push product into array and save it in local storage
        newCartArray.push(productCartInfo);
        localStorage.setItem("cartItems", JSON.stringify(newCartArray));
    } else {
        // parse existing array
        let returnedCartItems = JSON.parse(localStorage.getItem("cartItems"));

        // variable for checking if same item is added or not
        let identicalItemFound = false;

        if (returnedCartItems.length !== 0) {
            // iterate through all stored keys
            returnedCartItems.forEach((element) => {
                if (
                    element.productTitle === productTitle &&
                    element.productColor === productColor &&
                    element.productSize === productSize
                ) {
                    // increase item count
                    element.itemCount++;
                    // save it in local storage
                    localStorage.setItem(
                        "cartItems",
                        JSON.stringify(returnedCartItems)
                    );
                    return (identicalItemFound = true);
                }
            });
        }

        // if no identical item was found, add new item fully
        if (identicalItemFound === false) {
            returnedCartItems.push(productCartInfo);
            localStorage.setItem(
                "cartItems",
                JSON.stringify(returnedCartItems)
            );
        }
    }

    // popup animation on successful addition into cart
    const successfulPopup = document.querySelector(".successful-popup");
    successfulPopup.style.animation = "1.5s ease-in successfulAddition";
    setTimeout(function () {
        successfulPopup.style.animation = "none";
    }, 1500);
}

// event listener for add to cart button
addToCartButton.addEventListener("click", function (e) {
    const sizeUl = document.querySelector(".size-ul");
    const productSize = document.querySelector(".size-p").innerText;
    if (productSize === "Select Size") {
        // animate outline of size container
        sizeUl.style.animation = "1.5s ease-in outlineSizeContainer";
        setTimeout(function () {
            sizeUl.style.animation = "";
        }, 1500);
        // scroll to size selection
        document.querySelector(".color-cont-cont").scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
        // open size selection
        sizeContOpen = true;
        sizeHidden.style.maxHeight = "100px";
        sizeArrow.style.transform = "rotate(-45deg)";
        sizeUl.style.margin = "1rem auto";
    } else {
        addToCart();
        updateCartSub();
    }
});

// search logic

searchBox.addEventListener("keyup", searchForProducts);

function searchForProducts(event) {
    const searchBoxValue = document
        .getElementById("search-box")
        .value.toLowerCase();
    if (event.key === "Backspace" && searchBoxValue === "") {
        return;
    }

    let foundMatch = false;

    const initialH3IsThere = document.getElementById("initial");

    if (initialH3IsThere) {
        initialH3IsThere.remove();
    }

    const searchWindowWrapperThere =
        document.getElementById("a-window-wrapper");

    if (searchWindowWrapperThere) {
    } else {
        createWindowWrapper();
    }

    const noProducts = document.getElementById("no-products");

    if (noProducts) {
        noProducts.remove();
    } else {
        
    }
    
    deleteSearchItems();

    for (let i = 0; i < window.fullManProducts.length; i++) {
        let loweredCaseTitles = window.fullManProducts[i].title.toLowerCase();
        if (loweredCaseTitles.match(searchBoxValue)) {
            foundMatch = true;
            createSearchItem(window.fullManProducts[i]);
        }
    }
    if (foundMatch === false) {
        const searchWindowWrapper = document.querySelector(".search-window-wrapper");
        searchWindowWrapper.remove();
        noProductsFoundTitle();
    }
}

function noProductsFoundTitle() {
    const searchWindow = document.querySelector(".search-window");

    const h3 = document.createElement("h3");
    h3.innerText = "No Item Found";
    h3.classList.add(".no-products-found");
    h3.id = "no-products";

    searchWindow.appendChild(h3);
}

function createSearchTitle() {

}

function deleteSearchItems() {
    const searchItems = document.querySelectorAll(".search-item");
    searchItems.forEach((element) => {
        element.remove();
    });
}

function createWindowWrapper() {
    const searchWindow = document.querySelector(".search-window");

    const searchWindowWrapper = document.createElement("div");
    searchWindowWrapper.classList.add("search-window-wrapper");
    searchWindowWrapper.id = "a-window-wrapper";

    searchWindow.appendChild(searchWindowWrapper);
}

function createSearchItem(item) {
    const searchWindowWrapper = document.querySelector(
        ".search-window-wrapper"
    );

    const searchItemDiv = document.createElement("div");
    searchItemDiv.classList.add("search-item");

    const searchItemImg = document.createElement("img");
    searchItemImg.setAttribute("src", `${item.inSrc}`);

    const searchItemP = document.createElement("p");
    searchItemP.innerText = `${item.title}`;

    searchWindowWrapper.appendChild(searchItemDiv);
    searchItemDiv.appendChild(searchItemImg);
    searchItemDiv.appendChild(searchItemP);
}

const searchWindowInitial = document.querySelector(".search-window");

const initialH3 = document.createElement("h3");
initialH3.classList.add("search-for-something");
initialH3.id = "initial"
initialH3.innerText = "Search For Items";

searchWindowInitial.appendChild(initialH3);