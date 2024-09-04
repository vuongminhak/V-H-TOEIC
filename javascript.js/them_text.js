// Thêm text cho phần more information
window.addEventListener("load", function(){
var btn = document.querySelector(".continute");
var info = document.querySelectorAll(".not-first");

btn.onclick = function () {
    if (btn.innerText === "Xem thêm") {
        for (var i = 0; i < info.length; i++) info[i].classList.remove("none");
        btn.innerText = "Ẩn bớt";
    } else {
        for (var i = 0; i < info.length; i++) info[i].classList.add("none");
        btn.innerHTML = "Xem thêm";
    }
}
});
