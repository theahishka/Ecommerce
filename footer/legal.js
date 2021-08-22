const terms = document.querySelector(".terms");

let termsLongOpen = false;

terms.addEventListener("click", function () {
    const termsLong = document.querySelector(".terms-long");
    const termsArrow = document.querySelector(".arrow-up-terms");
    if (termsLongOpen === false) {
        termsLong.style.maxHeight = "3000px";
        termsLong.style.padding = "1.5rem";
        termsArrow.style.transform = "rotate(180deg)";
        termsLongOpen = true;
    } else {
        termsLong.style.maxHeight = "0";
        termsLong.style.padding = "0 1.5rem";
        termsArrow.style.transform = "rotate(0)";
        termsLongOpen = false;
    }
});

const privacy = document.querySelector(".privacy");

let privacyLongOpen = false;

privacy.addEventListener("click", function () {
    const privacyLong = document.querySelector(".privacy-long");
    const privacyArrow = document.querySelector(".arrow-up-privacy");
    if (privacyLongOpen === false) {
        privacyLong.style.maxHeight = "3000px";
        privacyLong.style.padding = "1.5rem";
        privacyArrow.style.transform = "rotate(180deg)";
        privacyLongOpen = true;
    } else {
        privacyLong.style.maxHeight = "0";
        privacyLong.style.padding = "0 1.5rem";
        privacyArrow.style.transform = "rotate(0)";
        privacyLongOpen = false;
    }
});
