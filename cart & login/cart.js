const backArrow = document.querySelector(".back-arrow");
backArrow.addEventListener("click", function() {
    window.history.go(-1);
})

const orderCont = document.querySelector(".order-cont");

window.addEventListener("scroll", function () {
    if (window.innerWidth > 799) {
        if (window.pageYOffset > 79) {
            orderCont.style.position = "fixed";
            orderCont.style.transform = "translateY(-5rem)";
        } else if (window.pageXOffset < 80) {
            orderCont.style.position = "relative";
            orderCont.style.transform = "";
        }
    }
});

function createItem(item) {
    let itemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
    const itemsCont = document.querySelector(".items-cont");

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const picInfoDiv = document.createElement("div");
    picInfoDiv.classList.add("pic-info");

    const picDiv = document.createElement("div");
    picDiv.classList.add("pic");

    const picImg = document.createElement("img");
    // pic src logic
    let imgSrcArray = item.imageSource.split("");
    imgSrcArray.splice(0, 2);

    let genderSrcArray = item.gender.split("");
    genderSrcArray.unshift("/");
    genderSrcArray.unshift(".");
    genderSrcArray.unshift(".");
    genderSrcArray.reverse();
    genderSrcArray.forEach((element) => {
        imgSrcArray.unshift(element);
    });

    picImg.setAttribute("src", `${imgSrcArray.join("")}`);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoTitle = document.createElement("h3");
    productInfoTitle.classList.add("item-title");
    productInfoTitle.innerText = `${item.productTitle}`;

    const productInfoPrice = document.createElement("p");
    productInfoPrice.classList.add("item-price");
    productInfoPrice.innerText = `${item.productPrice}`;

    const productInfoColor = document.createElement("p");
    productInfoColor.innerText = "Color: ";
    const spanColor = document.createElement("span");
    spanColor.classList.add("item-color");
    spanColor.innerText = `${item.productColor}`;

    const productInfoSize = document.createElement("p");
    productInfoSize.innerText = "Size: ";
    const spanSize = document.createElement("span");
    spanSize.classList.add("item-size");
    spanSize.innerText = `${item.productSize}`;

    //  quantity cont
    const quantityContDiv = document.createElement("div");
    quantityContDiv.classList.add("quantity-cont");

    const horizontalDivisionOne = document.createElement("hr");
    const horizontalDivisionTwo = document.createElement("hr");

    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity");

    const minusIcon = document.createElement("i");
    minusIcon.classList.add("fas");
    minusIcon.classList.add("fa-minus");

    const quantityAmount = document.createElement("p");
    quantityAmount.classList.add("quantity-amount");
    quantityAmount.innerText = `${item.itemCount}`;

    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fas");
    plusIcon.classList.add("fa-plus");

    // remove cont
    const removeCont = document.createElement("div");
    removeCont.classList.add("remove-cont");
    const removeP = document.createElement("p");
    removeP.classList.add("remove-p");
    removeP.innerText = "Remove";

    const itemDivision = document.createElement("hr");
    itemDivision.classList.add("item-division");

    itemsCont.appendChild(itemDiv);
    itemDiv.appendChild(picInfoDiv);
    picInfoDiv.appendChild(picDiv);
    picDiv.appendChild(picImg);
    picInfoDiv.appendChild(infoDiv);
    infoDiv.appendChild(productInfo);
    productInfo.appendChild(productInfoTitle);
    productInfo.appendChild(productInfoPrice);
    productInfo.appendChild(productInfoColor);
    productInfoColor.appendChild(spanColor);
    productInfo.appendChild(productInfoSize);
    productInfoSize.appendChild(spanSize);

    infoDiv.appendChild(quantityContDiv);
    quantityContDiv.appendChild(horizontalDivisionOne);
    quantityContDiv.appendChild(quantityDiv);
    quantityContDiv.appendChild(horizontalDivisionTwo);
    quantityDiv.appendChild(minusIcon);
    quantityDiv.appendChild(quantityAmount);
    quantityDiv.appendChild(plusIcon);

    itemDiv.appendChild(removeCont);
    removeCont.appendChild(removeP);

    itemDiv.appendChild(itemDivision);
}

function deleteItems() {
    const allCreatedItems = document.querySelectorAll(".item");
    allCreatedItems.forEach((element) => {
        element.remove();
    });
}

function createOrderTotal() {
    let itemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
    const orderWrapper = document.createElement("div");
    orderWrapper.classList.add("order-wrapper");

    // items number logic
    let itemsArray = [];

    itemsFromStorage.forEach((element) => {
        itemsArray.push(element.itemCount);
    });

    let itemsNumber = itemsArray.reduce((a, b) => {
        return a + b;
    });

    function singleOrMultiple() {
        if (itemsNumber === 1) {
            return "item";
        } else {
            return "items";
        }
    }

    const orderTotalTitle = document.createElement("h3");
    orderTotalTitle.innerText = `Order Total (${itemsNumber} ${singleOrMultiple()})`;

    const orderDivision = document.createElement("hr");

    const subTotal = document.createElement("div");
    subTotal.classList.add("sub-total");

    const textDiv = document.createElement("div");
    textDiv.classList.add("text");

    const textP = document.createElement("p");
    textP.innerText = "Subtotal";

    const textSpan = document.createElement("span");
    textSpan.innerText = "*Taxes Included";

    const amountDiv = document.createElement("div");
    amountDiv.classList.add("amount");

    // calculating total price
    let totalPriceArray = [];

    itemsFromStorage.forEach((element) => {
        let productItemPrice = element.productPrice.split("");
        productItemPrice.shift();

        let crossProduct =
            Number(element.itemCount) * Number(productItemPrice.join(""));

        totalPriceArray.push(crossProduct);
    });

    let totalPrice = totalPriceArray.reduce((a, b) => {
        return a + b;
    });

    const amountP = document.createElement("p");
    amountP.innerText = `$${totalPrice}`;

    const amountSpan = document.createElement("span");
    amountSpan.innerText = "Free Standard Delivery";

    const paymentMethods = document.createElement("div");
    paymentMethods.classList.add("payment-methods");

    const checkout = document.createElement("div");
    checkout.classList.add("checkout");
    checkout.innerText = "CHECKOUT";

    const paypal = document.createElement("div");
    paypal.classList.add("paypal");
    paypal.innerText = "PAYPAL";

    orderCont.appendChild(orderWrapper);
    orderWrapper.appendChild(orderTotalTitle);
    orderWrapper.appendChild(orderDivision);
    orderWrapper.appendChild(subTotal);
    subTotal.appendChild(textDiv);
    textDiv.appendChild(textP);
    textDiv.appendChild(textSpan);
    subTotal.appendChild(amountDiv);
    amountDiv.appendChild(amountP);
    amountDiv.appendChild(amountSpan);
    orderWrapper.appendChild(paymentMethods);
    paymentMethods.appendChild(checkout);
    paymentMethods.appendChild(paypal);
}

function deleteOrderTotal() {
    const orderWrapper = document.querySelector(".order-wrapper");
    orderWrapper.remove();
}

function initialCartLoad() {
    let itemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
    if (itemsFromStorage === null || itemsFromStorage.length === 0) {
        const forMediaWrapper = document.querySelector(".for-media-wrapper");
        forMediaWrapper.style.display = "none";
        createTitleNoProducts();
    } else {
        itemsFromStorage.forEach((element) => {
            createItem(element);
        });
        createOrderTotal();
        createMinusEventListener();
        createPlusEventListener();
        createRemoveEventListener();
    }
}

initialCartLoad();

function createPlusEventListener() {
    let itemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
    const faPlus = document.querySelectorAll(".fa-plus");

    faPlus.forEach((element) => {
        element.addEventListener("click", function (event) {
            for (let i = 0; i < itemsFromStorage.length; i++) {
                if (
                    element.parentElement.parentElement.previousSibling
                        .children[0].innerText ===
                        itemsFromStorage[i].productTitle &&
                    element.parentElement.parentElement.previousSibling
                        .children[2].children[0].innerText ===
                        itemsFromStorage[i].productColor &&
                    element.parentElement.parentElement.previousSibling
                        .children[3].children[0].innerText ===
                        itemsFromStorage[i].productSize
                ) {
                    // increment item count and save it to local storage
                    itemsFromStorage[i].itemCount++;
                    localStorage.setItem(
                        "cartItems",
                        JSON.stringify(itemsFromStorage)
                    );
                    updateCartSub();
                    deleteOrderTotal();
                    createOrderTotal();
                    
                    
                    deleteItems();
                    let updatedItemsCount = JSON.parse(
                        localStorage.getItem("cartItems")
                    );
                    updatedItemsCount.forEach((element) => {
                        createItem(element);
                    });
                    createPlusEventListener();
                    createMinusEventListener();
                    createRemoveEventListener();
                }
            }
        });
    });
}

function createMinusEventListener() {
    let itemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
    const faMinus = document.querySelectorAll(".fa-minus");

    faMinus.forEach((element) => {
        element.addEventListener("click", function (event) {
            for (let i = 0; i < itemsFromStorage.length; i++) {
                if (
                    element.parentElement.parentElement.previousSibling
                        .children[0].innerText ===
                        itemsFromStorage[i].productTitle &&
                    element.parentElement.parentElement.previousSibling
                        .children[2].children[0].innerText ===
                        itemsFromStorage[i].productColor &&
                    element.parentElement.parentElement.previousSibling
                        .children[3].children[0].innerText ===
                        itemsFromStorage[i].productSize
                ) {
                    if (itemsFromStorage[i].itemCount === 1) {
                        if (itemsFromStorage.length === 1) {
                            localStorage.removeItem("cartItems");
                            updateCartSub();
                            deleteOrderTotal();
                            deleteItems();
                            const forMediaWrapper =
                                document.querySelector(".for-media-wrapper");
                            forMediaWrapper.style.display = "none";
                            createTitleNoProducts();
                        } else {
                            itemsFromStorage.splice(i, 1);
                            localStorage.setItem(
                                "cartItems",
                                JSON.stringify(itemsFromStorage)
                            );
                            updateCartSub();
                            deleteOrderTotal();
                            createOrderTotal();
                            deleteItems();
                            let updatedItemsCount = JSON.parse(
                                localStorage.getItem("cartItems")
                            );
                            updatedItemsCount.forEach((element) => {
                                createItem(element);
                            });
                            createMinusEventListener();
                            createPlusEventListener();
                            createRemoveEventListener();
                        }
                    } else {
                        itemsFromStorage[i].itemCount--;
                        localStorage.setItem(
                            "cartItems",
                            JSON.stringify(itemsFromStorage)
                        );
                        updateCartSub();
                        deleteOrderTotal();
                        createOrderTotal();
                        
                        deleteItems();
                        let updatedItemsCount = JSON.parse(
                            localStorage.getItem("cartItems")
                        );
                        updatedItemsCount.forEach((element) => {
                            createItem(element);
                        });
                        createMinusEventListener();
                        createPlusEventListener();
                        createRemoveEventListener();
                    }
                }
            }
        });
    });
}

function createRemoveEventListener() {
    let itemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));
    const removeButtons = document.querySelectorAll(".remove-p");

    removeButtons.forEach((element) => {
        element.addEventListener("click", function (event) {
            let productInfoDiv =
                element.parentElement.previousSibling.children[1].children[0];
            for (let i = 0; i < itemsFromStorage.length; i++) {
                if (
                    productInfoDiv.children[0].innerText ===
                        itemsFromStorage[i].productTitle &&
                    productInfoDiv.children[2].children[0].innerText ===
                        itemsFromStorage[i].productColor &&
                    productInfoDiv.children[3].children[0].innerText ===
                        itemsFromStorage[i].productSize
                ) {
                    if (itemsFromStorage.length === 1) {
                        localStorage.removeItem("cartItems");
                        updateCartSub();
                        deleteOrderTotal();
                        deleteItems();
                        const forMediaWrapper =
                            document.querySelector(".for-media-wrapper");
                        forMediaWrapper.style.display = "none";
                        createTitleNoProducts();
                    } else {
                        itemsFromStorage.splice(i, 1);
                        localStorage.setItem(
                            "cartItems",
                            JSON.stringify(itemsFromStorage)
                        );
                        updateCartSub();
                        deleteOrderTotal();
                        createOrderTotal();
                        deleteItems();
                        let updatedItemsCount = JSON.parse(
                            localStorage.getItem("cartItems")
                        );
                        updatedItemsCount.forEach((element) => {
                            createItem(element);
                        });
                        createMinusEventListener();
                        createPlusEventListener();
                        createRemoveEventListener();
                    }
                }
            }
        });
    });
}

function createTitleNoProducts() {
    const main = document.querySelector("main");

    const noProductsDiv = document.createElement("div");
    noProductsDiv.classList.add("no-products");
    const noProductsH3 = document.createElement("h3");
    noProductsH3.classList.add("no-products-h3");
    noProductsH3.innerText = "Your Shopping Cart Is Empty";

    main.appendChild(noProductsDiv);
    noProductsDiv.appendChild(noProductsH3);
}
