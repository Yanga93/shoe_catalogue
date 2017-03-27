// ====== slide function goes here ====== //
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// ===== global variables to search item ===== //
var shoeColors = document.querySelector(".shoeColors");
var shoeSizes = document.querySelector(".shoeSizes");
var searchBtn = document.querySelector(".searchBtn")

// ===== global variables to add item
var textshoeColor = document.querySelector(".textshoeColor");
var textshoeSize = document.querySelector(".textshoeSize");
var buttonAdd = document.querySelector(".buttonAdd");

//===== message will be displayed here === //
var msgTemplate = document.querySelector(".msgTemplate");
