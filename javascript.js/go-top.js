window.addEventListener("load", function() {
    const toTop = document.querySelector(".btn-to-top");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });

    
    toTop.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
