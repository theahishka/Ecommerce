const gender = document.querySelector(".gender").innerHTML.toLocaleLowerCase();
const typeOfProduct = document.querySelector(".type-of-product").innerHTML;

let loadedPage = `${gender}${typeOfProduct}Products`;

// add and delete products functions

function addProducts(arr) {
    for (let i = 0; i < arr.length; i++) {
        const productContCont = document.querySelector(".product-cont-cont");
        const anchor = document.createElement("a");
        anchor.classList.add("product-cont");
        anchor.setAttribute("href", `${arr[i].productSrc}`);

        const imgOut = document.createElement("img");
        imgOut.classList.add("product-img");
        imgOut.setAttribute("src", `${arr[i].outSrc}`);
        imgOut.setAttribute("alt", `${arr[i].title}`);

        const imgIn = document.createElement("img");
        imgIn.classList.add("product-inner-img");
        imgIn.setAttribute("src", `${arr[i].inSrc}`);
        imgIn.setAttribute("alt", `${arr[i].title}`);

        const h3 = document.createElement("h3");
        h3.classList.add("title");
        h3.innerHTML = `${arr[i].title}`;

        const composition = document.createElement("p");
        composition.classList.add("composition");
        composition.innerHTML = `${arr[i].composition.join(", ")}`;

        const price = document.createElement("p");
        price.classList.add("price");
        price.innerHTML = `${arr[i].price}$`;

        productContCont.appendChild(anchor);
        anchor.appendChild(imgOut);
        anchor.appendChild(imgIn);
        anchor.appendChild(h3);
        anchor.appendChild(composition);
        anchor.appendChild(price);
    }
    productsAnime();
}

function productsAnime() {
    const productCont = document.querySelectorAll(".product-cont");
    setTimeout(function () {
        productCont.forEach((element) => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });
    }, 100);
}

function initialLoad() {
    addProducts(window[loadedPage]);
}

initialLoad();

function deleteProducts() {
    const productCont = document.querySelectorAll(".product-cont");
    productCont.forEach((element) => {
        element.remove();
    });
}

// sorting functions

const sortCont = document.querySelector(".sort");
let sortContOpen = false;

const hiddenSort = document.querySelector(".hidden-sort");

sortCont.addEventListener("click", function () {
    if (sortContOpen === false) {
        sortContOpen = true;
        hiddenSort.style.transform = "translateY(0%)";
        hiddenSort.style.opacity = "1";
        hiddenSort.style.pointerEvents = "auto";
        const sortArrow = document.querySelector(".sort-arrow");
        sortArrow.style.transform = "rotate(180deg)";

        // adjusting filter dropdown
        filterContOpen = false;
        hiddenFilter.style.transform = "translateY(-100%)";
        hiddenFilter.style.opacity = "0";
        hiddenFilter.style.pointerEvents = "none";
        const filterArrow = document.querySelector(".filter-arrow");
        filterArrow.style.transform = "";
    } else if (sortContOpen === true) {
        sortContOpen = false;
        hiddenSort.style.transform = "translateY(-100%)";
        hiddenSort.style.opacity = "0";
        hiddenSort.style.pointerEvents = "none";
        const sortArrow = document.querySelector(".sort-arrow");
        sortArrow.style.transform = "";
    }
});

function sortAscending() {
    deleteProducts();
    let newArr = window[loadedPage].slice();
    let sortedProducts = newArr.sort((a, b) => a.price - b.price);
    addProducts(sortedProducts);
}

function sortDescending() {
    deleteProducts();
    let newArrArr = window[loadedPage].slice();
    let sortedProductsAgain = newArrArr.sort((a, b) => b.price - a.price);
    addProducts(sortedProductsAgain);
}

const sortTypes = document.querySelectorAll(".sort-type");
sortTypes.forEach((element) => {
    element.addEventListener("click", function (e) {
        if (e.target.innerHTML === "Sort by Relevance") {
            deleteProducts();
            addProducts(window[loadedPage]);
        } else if (e.target.innerHTML === "Sort by Increasing Price") {
            sortAscending();
        } else {
            sortDescending();
        }
    });
});

// Filter Functions

const filterCont = document.querySelector(".filter");
let filterContOpen = false;

const hiddenFilter = document.querySelector(".hidden-filter");

filterCont.addEventListener("click", function () {
    if (filterContOpen === false) {
        filterContOpen = true;
        hiddenFilter.style.transform = "translateY(0%)";
        hiddenFilter.style.opacity = "1";
        hiddenFilter.style.pointerEvents = "auto";
        const filterArrow = document.querySelector(".filter-arrow");
        filterArrow.style.transform = "rotate(180deg)";

        // adjusting sort dropdown
        sortContOpen = false;
        hiddenSort.style.transform = "translateY(-100%)";
        hiddenSort.style.opacity = "0";
        hiddenSort.style.pointerEvents = "none";
        const sortArrow = document.querySelector(".sort-arrow");
        sortArrow.style.transform = "";
    } else if (filterContOpen === true) {
        filterContOpen = false;
        hiddenFilter.style.transform = "translateY(-100%)";
        hiddenFilter.style.opacity = "0";
        hiddenFilter.style.pointerEvents = "none";
        const filterArrow = document.querySelector(".filter-arrow");
        filterArrow.style.transform = "";
    }
});

let invisibleColorOpen = false;
let invisibleMaterialOpen = false;
let invisibleSizeOpen = false;

// visible divs with arrows
const visibleColor = document.querySelector(".visible-color");
const visibleMaterial = document.querySelector(".visible-material");
const visibleSize = document.querySelector(".visible-size");

// Invisible divs
const invisibleColor = document.querySelector(".invisible-color");
const invisibleMaterial = document.querySelector(".invisible-material");
const invisibleSize = document.querySelector(".invisible-size");

// visible arrows
const colorArrowV = document.querySelector(".color-arrow-v");
const materialArrowV = document.querySelector(".material-arrow-v");
const sizeArrowV = document.querySelector(".size-arrow-v");

visibleColor.addEventListener("click", function () {
    if (invisibleColorOpen === false) {
        invisibleColorOpen = true;
        invisibleColor.style.maxHeight = "200px";
        invisibleColor.style.pointerEvents = "auto";
        colorArrowV.style.transform = "rotate(180deg)";
    } else {
        invisibleColorOpen = false;
        invisibleColor.style.maxHeight = "0px";
        invisibleColor.style.pointerEvents = "none";
        colorArrowV.style.transform = "";
    }
});

visibleMaterial.addEventListener("click", function () {
    if (invisibleMaterialOpen === false) {
        invisibleMaterialOpen = true;
        invisibleMaterial.style.maxHeight = "200px";
        invisibleMaterial.style.pointerEvents = "auto";
        materialArrowV.style.transform = "rotate(180deg)";
    } else {
        invisibleMaterialOpen = false;
        invisibleMaterial.style.maxHeight = "0px";
        invisibleMaterial.style.pointerEvents = "none";
        materialArrowV.style.transform = "";
    }
});

visibleSize.addEventListener("click", function () {
    if (invisibleSizeOpen === false) {
        invisibleSizeOpen = true;
        invisibleSize.style.maxHeight = "200px";
        invisibleSize.style.pointerEvents = "auto";
        sizeArrowV.style.transform = "rotate(180deg)";
    } else {
        invisibleSizeOpen = false;
        invisibleSize.style.maxHeight = "0px";
        invisibleSize.style.pointerEvents = "none";
        sizeArrowV.style.transform = "";
    }
});

// filter logic

let filterConstraints = [];

function filterThatShit() {
    const productContCont = document.querySelector(".product-cont-cont");
    productContCont.innerHTML = "";
    let duplicateArray = window[loadedPage].slice();
    if (filterConstraints.length > 0) {
        for (let i = 0; i < filterConstraints.length; i++) {
            duplicateArray = duplicateArray.filter((element) => {
                return (
                    element[filterConstraints[i].category].indexOf(
                        filterConstraints[i].choice
                    ) !== -1
                );
            });
            deleteProducts();
            addProducts(duplicateArray);
        }
    } else {
        deleteProducts();
        addProducts(window[loadedPage]);
    }
    if (productContCont.innerText === "") {
        const noConstraintP = document.createElement("p");
        noConstraintP.classList.add("no-constraint");
        noConstraintP.innerHTML = "No Such Product Found";
        productContCont.appendChild(noConstraintP);
        setTimeout(function () {
            noConstraintP.style.opacity = "1";
        }, 100);
    }
}

// Clicking the filter choices

const filterChoices = document.querySelectorAll(".filter-choice");
const checkBoxes = document.querySelectorAll(".check-box");

filterChoices.forEach((element) => {
    element.addEventListener("click", function (e) {
        if (e.srcElement.children[0].innerHTML === "") {
            e.srcElement.children[0].style.backgroundColor = "grey";
            e.srcElement.children[0].innerHTML = "x";
            e.srcElement.children[0].style.color = "grey";
            let constraint = {
                category: `${e.srcElement.parentNode.previousElementSibling.children[0].innerHTML.toLowerCase()}`,
                choice: `${e.srcElement.children[1].innerHTML}`,
            };
            filterConstraints.push(constraint);
            filterThatShit();
        } else {
            e.srcElement.children[0].style.backgroundColor = "white";
            e.srcElement.children[0].innerHTML = "";
            e.srcElement.children[0].style.color = "white";
            for (let i = 0; i < filterConstraints.length; i++) {
                if (
                    filterConstraints[i].choice ===
                    `${e.srcElement.children[1].innerHTML}`
                ) {
                    filterConstraints.splice(i, 1);
                }
            }
            filterThatShit();
        }
    });
});