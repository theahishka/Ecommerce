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

function addProducts() {
    for (let i = 0; i < manKnitwearProducts.length; i++) {
        const productContCont = document.querySelector(".product-cont-cont");
        const anchor = document.createElement("a");
        anchor.classList.add("product-cont");
        anchor.setAttribute("href", `${manKnitwearProducts[i].productSrc}`);

        const imgOut = document.createElement("img");
        imgOut.classList.add("product-img");
        imgOut.setAttribute("src", `${manKnitwearProducts[i].outSrc}`);
        imgOut.setAttribute("alt", `${manKnitwearProducts[i].title}`);

        const imgIn = document.createElement("img");
        imgIn.classList.add("product-inner-img");
        imgIn.setAttribute("src", `${manKnitwearProducts[i].inSrc}`);
        imgIn.setAttribute("alt", `${manKnitwearProducts[i].title}`);

        const h3 = document.createElement("h3");
        h3.classList.add("title");
        h3.innerHTML = `${manKnitwearProducts[i].title}`;

        const composition = document.createElement("p");
        composition.classList.add("composition");
        composition.innerHTML = `${manKnitwearProducts[i].composition}`;

        const price = document.createElement("p");
        price.classList.add("price");
        price.innerHTML = `${manKnitwearProducts[i].price}$`;

        productContCont.appendChild(anchor);
        anchor.appendChild(imgOut);
        anchor.appendChild(imgIn);
        anchor.appendChild(h3);
        anchor.appendChild(composition);
        anchor.appendChild(price);
    }
}

addProducts();

function deleteProducts() {
    const productCont = document.querySelectorAll(".product-cont");
    productCont.forEach(element => {
        element.remove();
    });
}

// sorting functions

function sortAscending() {
    deleteProducts();
    manKnitwearProducts.sort((a, b) => a.price - b.price);
    addProducts();
}

function sortDescending() {
    deleteProducts();
    manKnitwearProducts.sort((a, b) => b.price - a.price);
    addProducts();
}
