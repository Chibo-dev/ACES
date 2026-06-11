function checkScroll() {
    const contents = document.querySelectorAll(".animated-content, .animated-content-right, .animated-content-left");
    contents.forEach((content, index) => {
        const contentPosition = content.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (contentPosition < screenHeight * 0.95 && !content.classList.contains("show")) {
            setTimeout(() => {
                content.classList.add("show");
            }, index * 75);
        }
    });
}

document.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);