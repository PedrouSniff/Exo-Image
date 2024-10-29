let click = document.getElementsByClassName("thumbnail")
let image = document.getElementById("mainImage")

click[0].addEventListener ("click", function () {
    image.setAttribute("src", "assets/img/bg-slider-01.jpg")
})
click[1].addEventListener ("click", function () {
    image.setAttribute("src", "assets/img/bg-slider-05.jpg")
})
click[2].addEventListener ("click", function () {
    image.setAttribute("src", "assets/img/bg-slider-06.jpg")
})