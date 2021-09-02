const manKnitwearProducts = [
    {
        title: "Light Crewneck",
        composition: "Cashmere",
        price: 1000,
        productSrc: "../../man/knitwear/knitwear1.html",
        outSrc: "./knitwear1/crewneck1.jpg",
        inSrc: "./knitwear1/crewneck2.jpg",
    },
    {
        title: "Thick Turtleneck",
        composition: "Vicuna",
        price: 5000,
        productSrc: "../../man/knitwear/knitwear2.html",
        outSrc: "./knitwear2/black/turtle1.jpg",
        inSrc: "./knitwear2/black/turtle2.jpg",
    },
    {
        title: "Thin Warwick",
        composition: "Silk, Cotton",
        price: 2000,
        productSrc: "../../man/knitwear/knitwear3.html",
        outSrc: "./knitwear3/Aqua Sky/aqua1.jpg",
        inSrc: "./knitwear3/Aqua Sky/aqua2.jpg",
    },
    {
        title: "Hoodie",
        composition: "Wool",
        price: 3000,
        productSrc: "../../man/knitwear/knitwear4.html",
        outSrc: "./knitwear4/hood1.jpg",
        inSrc: "./knitwear4/hood2.jpg",
    },
    {
        title: "Bomber",
        composition: "Baby Cashmere",
        price: 4000,
        productSrc: "../../man/knitwear/knitwear5.html",
        outSrc: "./knitwear5/almondine/alm1.jpg",
        inSrc: "./knitwear5/almondine/alm2.jpg",
    },
    {
        title: "Polo Shirt",
        composition: "Linen, Silk, Cashmere",
        price: 1000,
        productSrc: "../../man/knitwear/knitwear6.html",
        outSrc: "./knitwear6/earlyGrey/earl1.jpg",
        inSrc: "./knitwear6/earlyGrey/earl2.jpg",
    },
];

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
        composition.innerHTML = `${arr[i].composition}`;

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
}

addProducts(manKnitwearProducts);

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
    let newArr = manKnitwearProducts.slice();
    let sortedProducts = newArr.sort((a, b) => a.price - b.price);
    addProducts(sortedProducts);
}

function sortDescending() {
    deleteProducts();
    let newArrArr = manKnitwearProducts.slice();
    let sortedProductsAgain = newArrArr.sort((a, b) => b.price - a.price);
    addProducts(sortedProductsAgain);
}


const sortTypes = document.querySelectorAll(".sort-type");
sortTypes.forEach((element) => {
    element.addEventListener("click", function (e) {
        if (e.target.innerHTML === "Sort by Relevance") {
            deleteProducts();
            addProducts(manKnitwearProducts);
        } else if (e.target.innerHTML === "Sort by Increasing Price") {
            sortAscending();
        } else {
            sortDescending();
        }
    });
});

// Filter Functions


