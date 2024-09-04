window.addEventListener("load", function(){
    const searchInput = document.querySelector(".search-bar input");
    const items = document.querySelectorAll(".item");

    searchInput.addEventListener("input", function () {
        const check = searchInput.value.toLowerCase();
        
        for(let item of items) {
            let a = item.querySelector("h2").textContent.toLowerCase();
            if(a.includes(check)){
                item.classList.remove("hidden");
            }
            else {
                item.classList.add("hidden");
            }
        }
    });
});