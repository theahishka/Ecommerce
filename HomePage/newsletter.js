document
    .getElementById("subscribe-box")
    .addEventListener("keyup", validateEmail);

function validateEmail() {
    const email = document.getElementById("subscribe-box").value;
    const emailButton = document.querySelector(".email-button");
    const pattern = /^([\w-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if (email.match(pattern)) {
        emailButton.classList.add("valid");
        emailButton.classList.remove("email-btn");
    } else {
        emailButton.classList.remove("valid");
        emailButton.classList.add("email-btn");
    }
}
