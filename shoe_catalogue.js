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
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
};

// ===== global variables to search item ===== //
var shoeColors = document.querySelector(".shoeColors");
var shoeSizes = document.querySelector(".shoeSizes");

// ===== global variables to add item
var textshoeColor = document.querySelector(".textshoeColor");
var textshoeSize = document.querySelector(".textshoeSize");
var buttonAdd = document.querySelector(".buttonAdd");

//===== message will be displayed here === //
// compile my template

// create my function here for stock

document.querySelector(".searchBtn").addEventListener("click", function() {

  var msgTemplate = document.querySelector(".msgTemplate").innerHTML;

  var combineTemp = Handlebars.compile(msgTemplate);

  var data = combineTemp({
    shoes: [{
        color: 'Black',
        price: '350',
        in_stock: '5',
        size: '6',

      },
      {
        color: 'Brown',
        price: '205',
        in_stock: '3',
        size: '6',
      },
      {
        color: 'White',
        price: '305',
        in_stock: '3',
        size: '6',
      }
    ]
  });

  document.querySelector(".tableOutcome").innerHTML = data;

});
