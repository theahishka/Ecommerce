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
