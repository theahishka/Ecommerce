const allDesigners = document.querySelectorAll(".designer");
const designerOne = document.querySelector(".designer1");

const options = {
    threshold: 0,
    rootMargin: "-200px",
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, options);

allDesigners.forEach((element) => {
    observer.observe(element);
});
